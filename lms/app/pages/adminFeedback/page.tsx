"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../../components/AdminSidebar";

export default function AdminFeedback() {
    const { data: session } = useSession();
    const router = useRouter();
    const [feedback, setFeedback] = useState<any[]>([]);

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchFeedback();
        }
    }, [session, router]);

    const fetchFeedback = async () => {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        setFeedback(data);
    };

    return (
        <div className="min-h-screen bg-white flex">
            <AdminSidebar />
            <div className="flex-1 ml-14 p-8" style={{
                backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
                <h1 className="text-3xl font-bold mb-2" style={{ color: '#FFA07A' }}>💬 Student Feedback</h1>
                <p className="text-gray-600 mb-8">Anonymous submissions • Auto-delete after 90 days</p>

                <div className="bg-white rounded-lg shadow-sm border p-6" style={{ borderColor: '#FFA07A' }}>
                    {feedback.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No feedback submissions</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {feedback.map((item: any) => (
                                <div key={item._id} className="border rounded-lg p-6 hover:shadow-md transition bg-white" style={{ borderColor: '#BBBEC3' }}>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-3 py-1 text-white rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: '#FFA07A' }}>Anonymous</span>
                                        <span className="text-xs text-gray-500 font-medium">{new Date(item.createdAt).toLocaleString()}</span>
                                    </div>
                                    <p className="text-gray-800 bg-gray-50 p-4 rounded-lg mb-3 shadow-sm text-base leading-relaxed border border-gray-100">
                                        "{item.message}"
                                    </p>
                                    <p className="text-xs text-gray-400 text-right">Expires: {new Date(item.expiresAt).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
