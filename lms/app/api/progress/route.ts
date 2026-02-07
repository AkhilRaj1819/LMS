import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { getModuleName } from "@/lib/moduleNames";

export async function POST(req: NextRequest) {
  try {
    const { userEmail, subject, unitId, moduleId, score, totalQuestions, completed } = await req.json();
    
    console.log('POST /api/progress received:', { userEmail, subject, unitId, moduleId, score, totalQuestions });
    
    const client = await clientPromise;
    const db = client.db();
    
    const moduleName = getModuleName(subject, unitId, moduleId);
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const result = await db.collection("progress").updateOne(
      { userEmail, subject, unitId, moduleId },
      { 
        $set: { 
          score, 
          totalQuestions,
          moduleName,
          percentage,
          completed: completed || percentage >= 60,
          completedAt: new Date(),
          updatedAt: new Date()
        } 
      },
      { upsert: true }
    );
    
    console.log('Database update result:', result);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST /api/progress error:', error);
    return NextResponse.json({ error: "Failed to save progress" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("userEmail");
    const subject = searchParams.get("subject");
    
    const client = await clientPromise;
    const db = client.db();
    
    const query: any = {};
    if (userEmail) query.userEmail = userEmail;
    if (subject) query.subject = subject;
    
    const progress = await db.collection("progress").find(query).toArray();
    
    return NextResponse.json({ success: true, data: progress }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch progress" }, { status: 500 });
  }
}
