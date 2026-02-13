"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../../components/AdminSidebar";

export default function AdminTimetable() {
    const { data: session } = useSession();
    const router = useRouter();
    const [timetable, setTimetable] = useState<any>({});
    const [editSubject, setEditSubject] = useState<any>(null);
    const [subjectForm, setSubjectForm] = useState({ professor: "", description: "" });

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchTimetable();
        }
    }, [session, router]);

    const fetchTimetable = async () => {
        const res = await fetch("/api/timetable");
        const data = await res.json();
        if (data.ok) setTimetable(data.data);
    };

    const updateSlot = async (day: string, index: number, field: string, value: string) => {
        const updated = { ...timetable, [day]: timetable[day].map((slot: any, i: number) => i === index ? { ...slot, [field]: value } : slot) };
        setTimetable(updated);
        await fetch("/api/timetable", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schedule: updated })
        });
    };

    const openSubjectModal = (subject: any) => {
        setEditSubject(subject);
        setSubjectForm({
            professor: subject.teacher || "",
            description: subject.description || ""
        });
    };

    const updateSubject = async () => {
        const updated = { ...timetable };
        Object.keys(updated).forEach(day => {
            updated[day] = updated[day].map((slot: any) =>
                slot.subject === editSubject.subject ? { ...slot, teacher: subjectForm.professor, description: subjectForm.description } : slot
            );
        });
        setTimetable(updated);
        await fetch("/api/timetable", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schedule: updated })
        });
        setEditSubject(null);
    };

    const getUniqueSubjects = () => {
        const subjects = new Set();
        Object.values(timetable).forEach((day: any) => {
            day.forEach((slot: any) => {
                if (slot.subject) subjects.add(slot.subject);
            });
        });
        return Array.from(subjects);
    };

    return (
        <div className="min-h-screen bg-white flex">
            <AdminSidebar />
            <div className="flex-1 ml-14 p-8" style={{
                backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
                <h1 className="text-3xl font-bold mb-8" style={{ color: '#B9A2A7' }}>📅 Manage Timetable</h1>

                <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 overflow-hidden" style={{ borderColor: '#B9A2A7' }}>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="border-b" style={{ backgroundColor: '#F5F0F1', borderColor: '#E5E7EB' }}>
                                    <th className="p-4 text-left font-semibold text-sm border-r" style={{ color: '#5A6B80', borderColor: '#E5E7EB' }}>Time</th>
                                    {Object.keys(timetable).map(day => <th key={day} className="p-4 text-left font-semibold text-sm border-r last:border-r-0" style={{ color: '#5A6B80', borderColor: '#E5E7EB' }}>{day}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {timetable[Object.keys(timetable)[0]]?.map((_: any, index: number) => (
                                    <tr key={index} className="border-b hover:bg-gray-50 transition" style={{ borderColor: '#E5E7EB' }}>
                                        <td className="p-4 font-semibold text-sm text-gray-800 bg-gray-50 border-r" style={{ borderColor: '#E5E7EB' }}>
                                            {timetable[Object.keys(timetable)[0]][index].time}
                                        </td>
                                        {Object.keys(timetable).map(day => (
                                            <td key={day} className="p-4 border-r last:border-r-0 min-w-[140px]" style={{ borderColor: '#E5E7EB' }}>
                                                <input
                                                    type="text"
                                                    value={timetable[day][index].subject}
                                                    onChange={(e) => updateSlot(day, index, 'subject', e.target.value)}
                                                    className="w-full p-2 border rounded text-sm focus:ring-2 outline-none"
                                                    style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#B9A2A7' } as any}
                                                    placeholder="No Subject"
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-6" style={{ color: '#5A6B80' }}>Subject Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getUniqueSubjects().map((subject: any) => {
                        const subjectData: any = Object.values(timetable).flat().find((s: any) => s.subject === subject);
                        return (
                            <div key={subject} className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition" style={{ borderColor: '#BBBEC3' }}>
                                <h4 className="font-bold text-lg mb-2" style={{ color: '#5A6B80' }}>{subject}</h4>
                                <div className="space-y-2 mb-4">
                                    <p className="text-sm text-gray-600"><span className="font-semibold">Professor:</span> {subjectData?.teacher || "Not set"}</p>
                                    <p className="text-sm text-gray-600"><span className="font-semibold">Context:</span> {subjectData?.description || "Not set"}</p>
                                </div>
                                <button onClick={() => openSubjectModal(subjectData)} className="w-full text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm font-medium" style={{ backgroundColor: '#B9A2A7' }}>
                                    Edit Details
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Edit Modal */}
                {editSubject && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4 border-t-4" style={{ borderColor: '#B9A2A7' }}>
                            <h2 className="text-xl font-bold mb-4" style={{ color: '#5A6B80' }}>Edit {editSubject.subject}</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Professor Name</label>
                                    <input type="text" value={subjectForm.professor} onChange={(e) => setSubjectForm({ ...subjectForm, professor: e.target.value })} className="w-full border p-2 rounded focus:ring-2 outline-none" style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#B9A2A7' } as any} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea value={subjectForm.description} onChange={(e) => setSubjectForm({ ...subjectForm, description: e.target.value })} className="w-full border p-2 rounded focus:ring-2 outline-none h-24" style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#B9A2A7' } as any} />
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button onClick={updateSubject} className="flex-1 text-white py-2 rounded hover:opacity-90" style={{ backgroundColor: '#B9A2A7' }}>Save Changes</button>
                                    <button onClick={() => setEditSubject(null)} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
