"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Users, UserPlus, ShieldPlus, Search, Edit2, Trash2, Phone, GraduationCap, X, Menu, LogOut } from "lucide-react";
import AdminSidebar from "../../../components/AdminSidebar";
import Footer from "@/components/Footer";

export default function AdminUsers() {
    const { data: session } = useSession();
    const router = useRouter();
    const [users, setUsers] = useState<any[]>([]);
    const [stats, setStats] = useState({ total: 0, students: 0, admins: 0, guests: 0 });
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newAdminEmail, setNewAdminEmail] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [editUser, setEditUser] = useState<any>(null);
    const [editForm, setEditForm] = useState({ fullName: "", phoneNumber: "", currentSemester: 1 });


    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchUsers();
            fetchInitialStats();
        }
    }, [session, router]);

    // Handle searching with debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            if (session?.user?.isAdmin) {
                fetchUsers(searchQuery);
            }
        }, 300); // 300ms debounce
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const fetchInitialStats = async () => {
        const res = await fetch("/api/admin/stats");
        const data = await res.json();
        if (data.ok && data.stats) {
            setStats({
                total: data.stats.users.total,
                students: data.stats.users.students,
                admins: data.stats.users.admins,
                guests: data.stats.users.guests
            });
        }
    };

    const fetchUsers = async (query = "") => {
        setIsSearching(true);
        const url = query ? `/api/users/students?q=${encodeURIComponent(query)}` : "/api/users/students";
        const res = await fetch(url);
        const data = await res.json();
        if (data.ok) {
            setUsers(data.data);
        }
        setIsSearching(false);
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
        if (email === "admin@ggu.edu.in") {
            alert("The primary admin account cannot be deleted.");
            return;
        }
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

    const handleSignOut = async () => {
        try {
            await fetch('/api/users/logout', { method: 'POST' });
        } catch (error) {
            console.error('Logout error:', error);
        }
        signOut({ callbackUrl: '/pages/login' });
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8F6F1] text-[#121212] font-sans">
            <div className="flex relative">
                <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                <main className="flex-1 sm:ml-[280px] px-6 sm:px-16 py-6 sm:py-10 min-w-0 overflow-x-hidden relative z-10">
                    {/* TOP NAV BAR */}
                    <div className="flex items-center justify-between mb-8 sm:mb-12">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#3E73C1] cursor-pointer"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A8A]">Manage Users</h2>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-end">
                                <p className="text-[10px] font-bold uppercase text-[#888] tracking-widest leading-none">Admin</p>
                                <p className="text-sm font-bold text-[#3E73C1] mt-1">{session?.user?.email}</p>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-600 px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-rose-100 transition-all cursor-pointer group"
                            >
                                <LogOut className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                                Sign Out
                            </button>
                        </div>
                    </div>

                    {/* PAGE HEADER */}
                    <div className="mb-12 px-2">
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tighter mb-4 flex items-center gap-4">
                            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#3E73C1]" />
                            Manage Users
                        </h1>
                        <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl leading-relaxed">
                            Add new students or admins, update user details, and manage accounts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-6 shadow-sm flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-[#3E73C1]" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Students</p>
                                <h3 className="text-2xl font-bold text-[#121212] tracking-tighter">
                                    {stats.students || users.filter(u => !u.isAdmin && u.email?.toLowerCase().endsWith("@ggu.edu.in")).length}
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-6 shadow-sm flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                                <ShieldPlus className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admins</p>
                                <h3 className="text-2xl font-bold text-[#121212] tracking-tighter">
                                    {stats.admins || users.filter(u => u.isAdmin).length}
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-6 shadow-sm flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Guests</p>
                                <h3 className="text-2xl font-bold text-[#121212] tracking-tighter">
                                    {stats.guests || users.filter(u => !u.isAdmin && !u.email?.toLowerCase().endsWith("@ggu.edu.in")).length}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* ADD STUDENT */}
                        <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm hover:border-[#3E73C1]/30 transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-50 rounded-2xl">
                                    <UserPlus className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Add Student</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="student.id@university.edu"
                                        value={newUserEmail}
                                        onChange={(e) => setNewUserEmail(e.target.value)}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                <button
                                    onClick={addUser}
                                    className="bg-[#3E73C1] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#1E3A8A] transition-all active:scale-95 whitespace-nowrap cursor-pointer"
                                >
                                    Add Student
                                </button>
                            </div>
                        </div>

                        {/* ADD ADMIN */}
                        <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm hover:border-[#3E73C1]/30 transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-indigo-50 rounded-2xl">
                                    <ShieldPlus className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Add Admin</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="admin@university.edu"
                                        value={newAdminEmail}
                                        onChange={(e) => setNewAdminEmail(e.target.value)}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                <button
                                    onClick={addAdmin}
                                    className="bg-[#1E3A8A] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all active:scale-95 whitespace-nowrap cursor-pointer"
                                >
                                    Add Admin
                                </button>
                            </div>
                        </div>
                    </div>



                    {/* ALL USERS IN DATABASE SECTION */}
                    <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-8 bg-[#3E73C1] rounded-full" />
                                <h3 className="text-xl font-bold text-[#121212] tracking-tight uppercase">Total Users Present In Database</h3>
                                <div className="flex items-center gap-2 ml-2">
                                    <span className="bg-blue-50 text-[#3E73C1] text-[10px] px-2 py-0.5 rounded-full border border-blue-100 font-bold uppercase tracking-widest">{users.length} {searchQuery ? 'Results' : 'Total'}</span>
                                    {isSearching && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-3 h-3 border-2 border-[#3E73C1] border-t-transparent rounded-full" />}
                                </div>
                            </div>
                            <div className="relative max-w-md w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#F8F6F1] border border-[#E5E2D9] pl-12 pr-4 py-3 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                            {users.map((user) => (
                                <div key={`db-${user._id}`} className="flex items-center gap-4 bg-[#F8F6F1]/30 border border-[#E5E2D9] p-5 rounded-2xl hover:bg-white hover:border-[#3E73C1]/20 transition-all group">
                                    <div className="w-12 h-12 rounded-full bg-white border border-[#E5E2D9] flex items-center justify-center text-[12px] font-bold text-[#3E73C1] shrink-0 shadow-sm">
                                        {user.fullName?.charAt(0) || user.email.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-bold text-[12px] text-[#121212] uppercase tracking-tight leading-tight mb-1">{user.fullName || "User"}</h4>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="text-[10px] font-bold text-slate-400 lowercase break-all">{user.email}</p>
                                            {(() => {
                                                const isAdmin = user.isAdmin || user.email?.toLowerCase() === 'admin@ggu.edu.in';
                                                const isStudent = !isAdmin && user.email?.toLowerCase().endsWith("@ggu.edu.in");

                                                if (isAdmin) return (
                                                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md border bg-indigo-50 border-indigo-100 text-indigo-600 shrink-0">ADMIN</span>
                                                );
                                                if (isStudent) return (
                                                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md border bg-blue-50 border-blue-100 text-blue-600 shrink-0">STUDENT</span>
                                                );
                                                return (
                                                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md border bg-emerald-50 border-emerald-100 text-emerald-600 shrink-0">GUEST</span>
                                                );
                                            })()}
                                        </div>
                                        <div className="flex items-center gap-4 mt-2">
                                            <div className="flex items-center gap-1.5">
                                                <Phone className="w-2.5 h-2.5 text-slate-400" />
                                                <span className="text-[9px] font-bold text-slate-500">{user.phoneNumber || "No Phone"}</span>
                                            </div>
                                            {!user.isAdmin && user.email?.toLowerCase() !== 'admin@ggu.edu.in' && (
                                                <div className="flex items-center gap-1.5">
                                                    <GraduationCap className="w-2.5 h-2.5 text-slate-400" />
                                                    <span className="text-[9px] font-bold text-slate-500">S0{user.currentSemester || 1}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        {user.email !== "admin@ggu.edu.in" && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openEditModal(user);
                                                    }}
                                                    className="p-2 text-slate-300 hover:text-[#3E73C1] hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
                                                    title="Edit User"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteUser(user.email);
                                                    }}
                                                    className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all cursor-pointer"
                                                    title="Delete User"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {users.length === 0 && !isSearching && (
                                <div className="col-span-full py-20 flex flex-col items-center justify-center bg-[#F8F6F1]/50 rounded-[2rem] border-2 border-dashed border-[#E5E2D9]">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                                        <Users className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">No users found matching your search</p>
                                </div>
                            )}

                            {isSearching && users.length === 0 && (
                                <div className="col-span-full py-20 flex flex-col items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                        className="w-10 h-10 border-4 border-[#3E73C1] border-t-transparent rounded-full mb-4"
                                    />
                                    <p className="text-[#3E73C1] font-bold text-sm uppercase tracking-widest animate-pulse">Searching Database...</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer
                        links={[
                            { label: "Admin Panel", href: "#" },
                            { label: "System Logs", href: "#" },
                            { label: "Support", href: "#" }
                        ]}
                        copyright="© 2026 GGU LMS • Administrative Interface"
                    />
                </main>
            </div>

            {/* EDIT MODAL */}
            <AnimatePresence>
                {editUser && (
                    <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setEditUser(null)}
                            className="absolute inset-0 bg-[#121212]/40"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white border border-[#E5E2D9] rounded-[2.5rem] w-full max-w-lg shadow-lg overflow-hidden p-8 sm:p-10"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-tighter uppercase mb-1">Edit User</h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Editing {editUser.email}</p>
                                </div>
                                <button onClick={() => setEditUser(null)} className="p-3 bg-[#F8F6F1] rounded-2xl hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={editForm.fullName}
                                        onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="text"
                                        value={editForm.phoneNumber}
                                        onChange={(e) => setEditForm({ ...editForm, phoneNumber: e.target.value })}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all"
                                    />
                                </div>
                                {!editUser.isAdmin && (
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Semester</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                                                <button
                                                    key={sem}
                                                    onClick={() => setEditForm({ ...editForm, currentSemester: sem })}
                                                    className={`py-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${editForm.currentSemester === sem
                                                        ? 'bg-[#3E73C1] border-[#3E73C1] text-white'
                                                        : 'bg-[#F8F6F1] border-[#E5E2D9] text-slate-600 hover:border-[#3E73C1]/30'
                                                        }`}
                                                >
                                                    S0{sem}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="flex gap-4 pt-6">
                                    <button
                                        onClick={updateUser}
                                        className="flex-[2] bg-[#3E73C1] text-white py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#1E3A8A] transition-all active:scale-95 cursor-pointer"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={() => setEditUser(null)}
                                        className="flex-1 bg-[#F8F6F1] border border-[#E5E2D9] text-slate-600 py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
