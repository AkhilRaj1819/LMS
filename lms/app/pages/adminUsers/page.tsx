"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../../components/AdminSidebar";

export default function AdminUsers() {
    const { data: session } = useSession();
    const router = useRouter();
    const [users, setUsers] = useState<any[]>([]);
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newAdminEmail, setNewAdminEmail] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [editUser, setEditUser] = useState<any>(null);
    const [editForm, setEditForm] = useState({ fullName: "", phoneNumber: "", currentSemester: 1 });

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchUsers();
        }
    }, [session, router]);

    const fetchUsers = async () => {
        const res = await fetch("/api/users/students");
        const data = await res.json();
        if (data.ok) {
            setUsers(data.data);
        }
    };

    const addUser = async () => {
        if (!newUserEmail.trim()) {
            alert("Please enter an email");
            return;
        }
        const res = await fetch("/api/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: newUserEmail })
        });
        if (res.ok) {
            alert("User added!");
            setNewUserEmail("");
            fetchUsers();
        }
    };

    const addAdmin = async () => {
        if (!newAdminEmail.trim()) {
            alert("Please enter an email");
            return;
        }
        const res = await fetch("/api/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: newAdminEmail, isAdmin: true })
        });
        if (res.ok) {
            alert("Admin added!");
            setNewAdminEmail("");
            fetchUsers();
        }
    };

    const openEditModal = (user: any) => {
        setEditUser(user);
        setEditForm({
            fullName: user.fullName || "",
            phoneNumber: user.phoneNumber || "",
            currentSemester: user.currentSemester || 1
        });
    };

    const updateUser = async () => {
        if (!editForm.fullName.trim() || !editForm.phoneNumber.trim()) {
            alert("Please fill in all fields");
            return;
        }
        const res = await fetch("/api/users/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: editUser.email, ...editForm })
        });
        if (res.ok) {
            alert("User updated!");
            setEditUser(null);
            fetchUsers();
        }
    };

    const deleteUser = async (email: string) => {
        if (!confirm(`Delete user ${email}?`)) return;
        const res = await fetch("/api/users/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });
        if (res.ok) {
            alert("User deleted!");
            fetchUsers();
        }
    };

    return (
        <div className="min-h-screen bg-white flex">
            <AdminSidebar />
            <div className="flex-1 ml-14 p-8" style={{
                backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
                <h1 className="text-3xl font-bold mb-8" style={{ color: '#97ABC3' }}>👥 Manage Users</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Add Student */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border" style={{ borderColor: '#97ABC3' }}>
                        <h3 className="text-lg font-semibold mb-4" style={{ color: '#5A6B80' }}>Add New Student</h3>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Student Email"
                                value={newUserEmail}
                                onChange={(e) => setNewUserEmail(e.target.value)}
                                className="flex-1 border p-2.5 rounded-lg text-sm focus:ring-2 outline-none"
                                style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#97ABC3' } as any}
                            />
                            <button onClick={addUser} className="text-white px-6 py-2.5 rounded-lg font-medium whitespace-nowrap hover:opacity-90 transition" style={{ backgroundColor: '#97ABC3' }}>
                                + Add
                            </button>
                        </div>
                    </div>

                    {/* Add Admin */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border" style={{ borderColor: '#97ABC3' }}>
                        <h3 className="text-lg font-semibold mb-4" style={{ color: '#5A6B80' }}>Add New Admin</h3>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Admin Email"
                                value={newAdminEmail}
                                onChange={(e) => setNewAdminEmail(e.target.value)}
                                className="flex-1 border p-2.5 rounded-lg text-sm focus:ring-2 outline-none"
                                style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#97ABC3' } as any}
                            />
                            <button onClick={addAdmin} className="text-white px-6 py-2.5 rounded-lg font-medium whitespace-nowrap hover:opacity-90 transition" style={{ backgroundColor: '#5A6B80' }}>
                                + Add Admin
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6" style={{ borderColor: '#BBBEC3' }}>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border p-3 rounded-lg text-sm focus:ring-2 outline-none"
                            style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#97ABC3' } as any}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {users.filter(user => user.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase())).map((user) => (
                            <div key={user._id} className="border rounded-lg p-5 hover:shadow-md transition bg-white" style={{ borderColor: '#BBBEC3' }}>
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 truncate">{user.fullName || "Not set"}</h4>
                                        <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ml-2`} style={{
                                        backgroundColor: user.isAdmin ? '#E0E4E8' : '#F0F2F5',
                                        color: user.isAdmin ? '#5A6B80' : '#8895A3'
                                    }}>
                                        {user.isAdmin ? "Admin" : "Student"}
                                    </span>
                                </div>

                                <div className="space-y-2 mb-4 text-sm text-gray-600">
                                    <p className="flex items-center gap-2"><span>📱</span> {user.phoneNumber || "Not set"}</p>
                                    {!user.isAdmin && <p className="flex items-center gap-2"><span>📚</span> Semester {user.currentSemester}</p>}
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={() => openEditModal(user)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium transition">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteUser(user.email)} className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg text-sm font-medium transition">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Edit Modal */}
                {editUser && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4 border-t-4" style={{ borderColor: '#97ABC3' }}>
                            <h2 className="text-xl font-bold mb-4" style={{ color: '#5A6B80' }}>Edit User</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" value={editForm.fullName} onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })} className="w-full border p-2 rounded focus:ring-2 outline-none" style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#97ABC3' } as any} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="text" value={editForm.phoneNumber} onChange={(e) => setEditForm({ ...editForm, phoneNumber: e.target.value })} className="w-full border p-2 rounded focus:ring-2 outline-none" style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#97ABC3' } as any} />
                                </div>
                                {!editUser.isAdmin && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                                        <select value={editForm.currentSemester} onChange={(e) => setEditForm({ ...editForm, currentSemester: Number(e.target.value) })} className="w-full border p-2 rounded focus:ring-2 outline-none" style={{ borderColor: '#BBBEC3', '--tw-ring-color': '#97ABC3' } as any}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => <option key={sem} value={sem}>Semester {sem}</option>)}
                                        </select>
                                    </div>
                                )}
                                <div className="flex gap-3 pt-2">
                                    <button onClick={updateUser} className="flex-1 text-white py-2 rounded hover:opacity-90 transition" style={{ backgroundColor: '#97ABC3' }}>Save Changes</button>
                                    <button onClick={() => setEditUser(null)} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
