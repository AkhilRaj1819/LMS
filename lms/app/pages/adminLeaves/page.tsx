"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../../components/AdminSidebar";

export default function AdminLeaves() {
    const { data: session } = useSession();
    const router = useRouter();
    const [leaves, setLeaves] = useState<any[]>([]);

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchLeaves();
        }
    }, [session, router]);

    const fetchLeaves = async () => {
        const res = await fetch("/api/leaves");
        const data = await res.json();
        setLeaves(data);
    };

    const deleteLeave = async (id: string) => {
        if (!confirm("Delete this leave application?")) return;
        await fetch("/api/leaves", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
        });
        fetchLeaves();
    };

    return (
        <div className="min-h-screen bg-white flex">
            <AdminSidebar />
            <div className="flex-1 ml-14 p-8" style={{
                backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
                <h1 className="text-3xl font-bold mb-8" style={{ color: '#8CAAAF' }}>📝 Leave Applications</h1>

                <div className="bg-white rounded-lg shadow-sm border p-6" style={{ borderColor: '#8CAAAF' }}>
                    {leaves.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No leave applications found</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {leaves.map((leave) => (
                                <div key={leave._id} className="border rounded-lg p-5 hover:shadow-md transition bg-white" style={{ borderColor: '#BBBEC3' }}>
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-semibold" style={{ color: '#5A6B80' }}>{leave.userName}</h3>
                                                <span className="px-2.5 py-1 text-white rounded-full text-xs font-medium" style={{ backgroundColor: '#8CAAAF' }}>{leave.leaveType}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-3">{leave.userEmail}</p>
                                            <div className="flex gap-4 text-sm text-gray-700 mb-3">
                                                <span className="bg-gray-50 px-2 py-1 rounded border border-gray-200">📅 {new Date(leave.startDate).toLocaleDateString()}</span>
                                                <span className="text-gray-400">→</span>
                                                <span className="bg-gray-50 px-2 py-1 rounded border border-gray-200">{new Date(leave.endDate).toLocaleDateString()}</span>
                                            </div>
                                            <p className="text-sm text-gray-800 bg-gray-50 p-3 rounded-lg mb-2 border border-gray-100 italic">{leave.reason}</p>
                                            <p className="text-xs text-gray-500">Submitted: {new Date(leave.createdAt).toLocaleString()}</p>
                                        </div>
                                        <button
                                            onClick={() => deleteLeave(leave._id)}
                                            className="ml-4 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
                                        >
                                            <span>🗑️</span> Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
