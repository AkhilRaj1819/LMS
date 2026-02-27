import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const db = await getDb();

        // 1. User Summary Statistics
        const userStats = await db.collection("users").aggregate([
            {
                $facet: {
                    total: [{ $count: "count" }],
                    admins: [
                        {
                            $match: {
                                $or: [
                                    { isAdmin: true },
                                    { email: "admin@ggu.edu.in" }
                                ]
                            }
                        },
                        { $count: "count" }
                    ],
                    students: [
                        {
                            $match: {
                                isAdmin: { $ne: true },
                                email: { $regex: /@ggu\.edu\.in$/i, $ne: "admin@ggu.edu.in" }
                            }
                        },
                        { $count: "count" }
                    ],
                    guests: [
                        {
                            $match: {
                                isAdmin: { $ne: true },
                                email: { $not: /@ggu\.edu\.in$/i }
                            }
                        },
                        { $count: "count" }
                    ]
                }
            }
        ]).toArray();

        const users = {
            total: userStats[0]?.total[0]?.count || 0,
            admins: userStats[0]?.admins[0]?.count || 0,
            students: userStats[0]?.students[0]?.count || 0,
            guests: userStats[0]?.guests[0]?.count || 0
        };

        // 2. Leaves Summary
        const totalLeaves = await db.collection("leaves").countDocuments();
        const recentLeaves = await db.collection("leaves")
            .find({})
            .sort({ createdAt: -1 })
            .limit(3)
            .toArray();

        // 3. Feedback Summary
        const totalFeedback = await db.collection("feedback").countDocuments();
        const recentFeedback = await db.collection("feedback")
            .find({})
            .sort({ createdAt: -1 })
            .limit(3)
            .toArray();

        // 4. Progress Analysis (Unique attempts calculation)
        // We group by unique module attempts first to avoid duplicates
        const progressStats = await db.collection("progress").aggregate([
            {
                $group: {
                    _id: {
                        userEmail: "$userEmail",
                        subject: "$subject",
                        unitId: "$unitId",
                        moduleId: "$moduleId"
                    },
                    avgScore: { $first: "$percentage" }
                }
            },
            {
                $facet: {
                    // Performers: Group by user email and calculate average
                    performerCalculations: [
                        {
                            $group: {
                                _id: "$_id.userEmail",
                                avg: { $avg: "$avgScore" },
                                count: { $sum: 1 }
                            }
                        },
                        { $sort: { avg: -1 } }
                    ],
                    // Subject Completion: Group by subject and calculate average
                    subjectCalculations: [
                        {
                            $group: {
                                _id: "$_id.subject",
                                avgScore: { $avg: "$avgScore" },
                                attempts: { $sum: 1 }
                            }
                        },
                        { $sort: { attempts: -1 } }
                    ]
                }
            }
        ]).toArray();

        const performersRaw = progressStats[0]?.performerCalculations || [];
        const subjectsRaw = progressStats[0]?.subjectCalculations || [];

        const lowPerformers = performersRaw
            .filter((p: any) => p.avg < 60)
            .sort((a: any, b: any) => a.avg - b.avg)
            .slice(0, 5)
            .map((p: any) => ({ email: p._id, avg: p.avg, count: p.count }));

        const topPerformers = performersRaw
            .filter((p: any) => p.count >= 3)
            .sort((a: any, b: any) => b.avg - a.avg)
            .slice(0, 5)
            .map((p: any) => ({ email: p._id, avg: p.avg, count: p.count }));

        const subjectCompletion = subjectsRaw.map((s: any) => ({
            subject: s._id,
            attempts: s.attempts,
            avgScore: s.avgScore.toFixed(1)
        }));

        return NextResponse.json({
            ok: true,
            stats: {
                users,
                leaves: {
                    count: totalLeaves,
                    recent: recentLeaves
                },
                feedback: {
                    count: totalFeedback,
                    recent: recentFeedback
                },
                performance: {
                    lowPerformers,
                    topPerformers,
                    subjectCompletion
                }
            }
        });

    } catch (error: any) {
        console.error("Admin Stats Error:", error);
        return NextResponse.json(
            { ok: false, error: error.message },
            { status: 500 }
        );
    }
}
