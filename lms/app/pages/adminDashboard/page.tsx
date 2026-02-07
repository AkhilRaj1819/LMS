"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");
  const [users, setUsers] = useState([]);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [stats, setStats] = useState({ total: 0, students: 0, admins: 0 });
  const [editUser, setEditUser] = useState(null);
  const [editForm, setEditForm] = useState({ fullName: "", phoneNumber: "", currentSemester: 1 });
  const [timetable, setTimetable] = useState({});
  const [leaves, setLeaves] = useState([]);
  const [editSubject, setEditSubject] = useState(null);
  const [subjectForm, setSubjectForm] = useState({ professor: "", description: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [studentProgress, setStudentProgress] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    if (session === null) return;
    if (session && !session.user?.isAdmin) {
      router.push("/");
      return;
    }
    if (session) {
      fetchUsers();
      fetchTimetable();
      fetchLeaves();
      fetchFeedback();
    }
  }, [session]);

  const fetchUsers = async () => {
    const res = await fetch("/api/users/students");
    const data = await res.json();
    if (data.ok) {
      setUsers(data.data);
      setStats({
        total: data.data.length,
        students: data.data.filter(u => !u.isAdmin).length,
        admins: data.data.filter(u => u.isAdmin).length
      });
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

  const updateUserSemester = async (email, semester) => {
    const res = await fetch("/api/users/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, currentSemester: semester })
    });
    if (res.ok) {
      alert("Semester updated!");
      fetchUsers();
    }
  };

  const openEditModal = (user) => {
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

  const deleteUser = async (email) => {
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

  const fetchTimetable = async () => {
    const res = await fetch("/api/timetable");
    const data = await res.json();
    if (data.ok) setTimetable(data.data);
  };

  const updateSlot = async (day, index, field, value) => {
    const updated = { ...timetable, [day]: timetable[day].map((slot, i) => i === index ? { ...slot, [field]: value } : slot) };
    setTimetable(updated);
    await fetch("/api/timetable", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schedule: updated })
    });
  };

  const openSubjectModal = (subject) => {
    setEditSubject(subject);
    setSubjectForm({
      professor: subject.teacher || "",
      description: subject.description || ""
    });
  };

  const updateSubject = async () => {
    const updated = { ...timetable };
    Object.keys(updated).forEach(day => {
      updated[day] = updated[day].map(slot => 
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

  const fetchLeaves = async () => {
    const res = await fetch("/api/leaves");
    const data = await res.json();
    setLeaves(data);
  };

  const fetchFeedback = async () => {
    const res = await fetch("/api/feedback");
    const data = await res.json();
    setFeedback(data);
  };

  const fetchStudentProgress = async (email: string) => {
    const res = await fetch(`/api/progress?userEmail=${email}`);
    const data = await res.json();
    if (data.success) {
      setStudentProgress(data.data);
      setSelectedStudent(email);
    }
  };

  const deleteLeave = async (id) => {
    if (!confirm("Delete this leave application?")) return;
    await fetch("/api/leaves", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    fetchLeaves();
  };

  const getUniqueSubjects = () => {
    const subjects = new Set();
    Object.values(timetable).forEach(day => {
      day.forEach(slot => {
        if (slot.subject) subjects.add(slot.subject);
      });
    });
    return Array.from(subjects);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <nav className="bg-white border-b fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push("/")} className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">🎓 LMS</button>
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">Admin Portal</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{session?.user?.name || "Administrator"}</p>
              <p className="text-xs text-gray-500">{session?.user?.email}</p>
            </div>
            <button onClick={() => signOut({ callbackUrl: "/pages/adminLogin" })} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm font-medium">Logout</button>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 bg-transparent pt-20 relative">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }}></div>

        <div className="max-w-[1050px] mx-auto px-6 py-6 relative z-10">
          {!activeTab ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's your system overview.</p>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <p className="text-gray-600 text-sm mb-1">Total Users</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                  <p className="text-xs text-gray-500 mt-2">Active accounts</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <p className="text-gray-600 text-sm mb-1">Students</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.students}</p>
                  <p className="text-xs text-gray-500 mt-2">Enrolled</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <p className="text-gray-600 text-sm mb-1">Admins</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.admins}</p>
                  <p className="text-xs text-gray-500 mt-2">Administrators</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <p className="text-gray-600 text-sm mb-1">Pending Leaves</p>
                  <p className="text-2xl font-bold text-gray-800">{leaves.length}</p>
                  <p className="text-xs text-gray-500 mt-2">To review</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <p className="text-gray-600 text-sm mb-1">Feedback</p>
                  <p className="text-2xl font-bold text-gray-800">{feedback.length}</p>
                  <p className="text-xs text-gray-500 mt-2">Anonymous</p>
                </div>
              </div>

              <h2 className="text-lg font-semibold mb-4 text-gray-800">Quick Access</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-5">
                <button onClick={() => router.push("/pages/livebooks")} className="relative border overflow-hidden cursor-pointer w-full transition-all duration-100 hover:translate-x-1 hover:translate-y-1" style={{ backgroundColor: "#BBBEC3", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.5)" }}>
                  <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="mesh-1" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
                          <path d="M 3 0 L 0 0 0 3" fill="none" stroke="#C6B7F2" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mesh-1)" />
                    </svg>
                    <span className="relative z-10 text-4xl">📚</span>
                  </div>
                  <div className="flex items-center justify-center py-2 bg-white">
                    <p className="font-medium text-sm">LiveBooks</p>
                  </div>
                </button>

                <button onClick={() => setActiveTab("users")} className="relative border overflow-hidden cursor-pointer w-full transition-all duration-100 hover:translate-x-1 hover:translate-y-1" style={{ backgroundColor: "#BBBEC3", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.5)" }}>
                  <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="mesh-2" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
                          <path d="M 3 0 L 0 0 0 3" fill="none" stroke="#97ABC3" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mesh-2)" />
                    </svg>
                    <span className="relative z-10 text-4xl">👥</span>
                  </div>
                  <div className="flex items-center justify-center py-2 bg-white">
                    <p className="font-medium text-sm">Manage Users</p>
                  </div>
                </button>

                <button onClick={() => setActiveTab("leaves")} className="relative border overflow-hidden cursor-pointer w-full transition-all duration-100 hover:translate-x-1 hover:translate-y-1" style={{ backgroundColor: "#BBBEC3", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.5)" }}>
                  <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="mesh-3" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
                          <path d="M 3 0 L 0 0 0 3" fill="none" stroke="#8CAAAF" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mesh-3)" />
                    </svg>
                    <span className="relative z-10 text-4xl">📝</span>
                  </div>
                  <div className="flex items-center justify-center py-2 bg-white">
                    <p className="font-medium text-sm">Leave Applications</p>
                  </div>
                </button>

                <button onClick={() => setActiveTab("timetable")} className="relative border overflow-hidden cursor-pointer w-full transition-all duration-100 hover:translate-x-1 hover:translate-y-1" style={{ backgroundColor: "#BBBEC3", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.5)" }}>
                  <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="mesh-4" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
                          <path d="M 3 0 L 0 0 0 3" fill="none" stroke="#B9A2A7" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mesh-4)" />
                    </svg>
                    <span className="relative z-10 text-4xl">📅</span>
                  </div>
                  <div className="flex items-center justify-center py-2 bg-white">
                    <p className="font-medium text-sm">Timetable</p>
                  </div>
                </button>

                <button onClick={() => router.push("/pages/adminProgress")} className="relative border overflow-hidden cursor-pointer w-full transition-all duration-100 hover:translate-x-1 hover:translate-y-1" style={{ backgroundColor: "#BBBEC3", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.5)" }}>
                  <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="mesh-5" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
                          <path d="M 3 0 L 0 0 0 3" fill="none" stroke="#8B869B" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mesh-5)" />
                    </svg>
                    <span className="relative z-10 text-4xl">📊</span>
                  </div>
                  <div className="flex items-center justify-center py-2 bg-white">
                    <p className="font-medium text-sm">Student Progress</p>
                  </div>
                </button>

                <button onClick={() => setActiveTab("feedback")} className="relative border overflow-hidden cursor-pointer w-full transition-all duration-100 hover:translate-x-1 hover:translate-y-1" style={{ backgroundColor: "#BBBEC3", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.5)" }}>
                  <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="mesh-6" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
                          <path d="M 3 0 L 0 0 0 3" fill="none" stroke="#FFA07A" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mesh-6)" />
                    </svg>
                    <span className="relative z-10 text-4xl">💬</span>
                  </div>
                  <div className="flex items-center justify-center py-2 bg-white">
                    <p className="font-medium text-sm">Feedback</p>
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              {activeTab === "users" && (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="mb-8">
                    <button onClick={() => setActiveTab("")} className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-3 inline-block">← Back</button>
                    <h2 className="text-2xl font-bold text-gray-800">👥 Manage Users</h2>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
                    <h3 className="text-sm font-semibold text-blue-900 mb-4">Add New Student</h3>
                    <div className="flex gap-3">
                      <input type="email" placeholder="Student Email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} className="border border-blue-300 p-2.5 rounded-lg flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                      <button onClick={addUser} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition text-sm font-medium">+ Add</button>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-200">
                    <h3 className="text-sm font-semibold text-purple-900 mb-4">Add New Admin</h3>
                    <div className="flex gap-3">
                      <input type="email" placeholder="Admin Email" value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} className="border border-purple-300 p-2.5 rounded-lg flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                      <button onClick={addAdmin} className="bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-700 transition text-sm font-medium">+ Add Admin</button>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">All Users</h3>
                  <input type="text" placeholder="Search by name or email..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full border border-blue-300 p-2.5 rounded-lg mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.filter(user => user.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase())).map((user) => (
                      <div key={user._id} className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition bg-blue-50">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{user.fullName || "Not set"}</h4>
                            <p className="text-sm text-gray-600">{user.email}</p>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-700">{user.isAdmin ? "Admin" : "Student"}</span>
                        </div>
                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <p>📱 {user.phoneNumber || "Not set"}</p>
                          {!user.isAdmin && <p>📚 Semester {user.currentSemester}</p>}
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => openEditModal(user)} className="flex-1 text-white px-3 py-2 rounded-lg transition text-sm font-medium" style={{backgroundColor: '#9CCFFF', color: '#000'}}>Edit</button>
                          {!user.isAdmin && (
                            <button onClick={() => fetchStudentProgress(user.email)} className="flex-1 text-white px-3 py-2 rounded-lg transition text-sm font-medium" style={{backgroundColor: '#7CB342'}}>Progress</button>
                          )}
                          <button onClick={() => deleteUser(user.email)} className="flex-1 text-white px-3 py-2 rounded-lg transition text-sm font-medium" style={{backgroundColor: '#FF5B5B'}}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "leaves" && (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="mb-8">
                    <button onClick={() => setActiveTab("")} className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-3 inline-block">← Back</button>
                    <h2 className="text-2xl font-bold text-gray-800">📝 Leave Applications</h2>
                  </div>
                  {leaves.length === 0 ? (<div className="text-center py-12"><p className="text-gray-500 text-lg">No leave applications</p></div>) : (<div className="space-y-4">{leaves.map((leave) => (<div key={leave._id} className="border border-amber-200 rounded-lg p-5 hover:shadow-md transition bg-amber-50"><div className="flex justify-between items-start"><div className="flex-1"><div className="flex items-center gap-3 mb-2"><h3 className="font-semibold text-gray-800">{leave.userName}</h3><span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">{leave.leaveType}</span></div><p className="text-sm text-gray-600 mb-3">{leave.userEmail}</p><div className="flex gap-4 text-sm text-gray-700 mb-3"><span>📅 {new Date(leave.startDate).toLocaleDateString()}</span><span>→</span><span>{new Date(leave.endDate).toLocaleDateString()}</span></div><p className="text-sm text-gray-800 bg-white p-3 rounded-lg mb-2">{leave.reason}</p><p className="text-xs text-gray-500">Submitted: {new Date(leave.createdAt).toLocaleString()}</p></div><button onClick={() => deleteLeave(leave._id)} className="text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg text-sm font-medium transition">Delete</button></div></div>))}</div>)}
                </div>
              )}

              {activeTab === "timetable" && (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="mb-8">
                    <button onClick={() => setActiveTab("")} className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-3 inline-block">← Back</button>
                    <h2 className="text-2xl font-bold text-gray-800">📅 Manage Timetable</h2>
                  </div>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-teal-50 border-b border-teal-200">
                          <th className="p-4 text-left font-semibold text-sm text-teal-900 border-r border-teal-200">Time</th>
                          {Object.keys(timetable).map(day => <th key={day} className="p-4 text-left font-semibold text-sm text-teal-900 border-r border-teal-200 last:border-r-0">{day}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {timetable[Object.keys(timetable)[0]]?.map((_, index) => (
                          <tr key={index} className="border-b border-teal-100 hover:bg-teal-50 transition">
                            <td className="p-4 font-semibold text-sm text-gray-800 bg-teal-50 border-r border-teal-200">{timetable[Object.keys(timetable)[0]][index].time}</td>
                            {Object.keys(timetable).map(day => (
                              <td key={day} className="p-4 border-r border-teal-200 last:border-r-0">
                                <input type="text" value={timetable[day][index].subject} onChange={(e) => updateSlot(day, index, 'subject', e.target.value)} className="w-full p-2.5 border border-teal-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent" placeholder="Subject" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getUniqueSubjects().map(subject => {
                      const subjectData = Object.values(timetable).flat().find(s => s.subject === subject);
                      return (
                        <div key={subject} className="border border-teal-200 rounded-lg p-4 hover:shadow-md transition bg-teal-50">
                          <h4 className="font-semibold text-gray-800 mb-2">{subject}</h4>
                          <p className="text-sm text-gray-600 mb-3">Professor: {subjectData?.teacher || "Not set"}</p>
                          <p className="text-sm text-gray-600 mb-4">Description: {subjectData?.description || "Not set"}</p>
                          <button onClick={() => openSubjectModal(subjectData)} className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition text-sm font-medium">Edit</button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === "feedback" && (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="mb-8">
                    <button onClick={() => setActiveTab("")} className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-3 inline-block">← Back</button>
                    <h2 className="text-2xl font-bold text-gray-800">💬 Student Feedback</h2>
                    <p className="text-sm text-gray-600 mt-2">Anonymous submissions • Auto-delete after 90 days</p>
                  </div>
                  {feedback.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">No feedback submissions</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {feedback.map((item: any) => (
                        <div key={item._id} className="border border-orange-200 rounded-lg p-5 hover:shadow-md transition bg-orange-50">
                          <div className="flex justify-between items-start mb-3">
                            <span className="px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Anonymous</span>
                            <span className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-gray-800 bg-white p-4 rounded-lg mb-2">{item.message}</p>
                          <p className="text-xs text-gray-500">Expires: {new Date(item.expiresAt).toLocaleDateString()}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {editUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Edit User: {editUser.email}</h2>
            <input type="text" placeholder="Full Name" value={editForm.fullName} onChange={(e) => setEditForm({...editForm, fullName: e.target.value})} className="w-full border border-blue-300 p-2 mb-3 rounded" />
            <input type="text" placeholder="Phone Number" value={editForm.phoneNumber} onChange={(e) => setEditForm({...editForm, phoneNumber: e.target.value})} className="w-full border border-blue-300 p-2 mb-3 rounded" />
            {!editUser.isAdmin && (<select value={editForm.currentSemester} onChange={(e) => setEditForm({...editForm, currentSemester: Number(e.target.value)})} className="w-full border border-blue-300 p-2 mb-3 rounded">{[1,2,3,4,5,6,7,8].map(sem => <option key={sem} value={sem}>Semester {sem}</option>)}</select>)}
            <div className="flex gap-2">
              <button onClick={updateUser} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
              <button onClick={() => setEditUser(null)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {editSubject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Subject: {editSubject.subject}</h2>
            <input type="text" placeholder="Professor Name" value={subjectForm.professor} onChange={(e) => setSubjectForm({...subjectForm, professor: e.target.value})} className="w-full border border-teal-300 p-2 mb-3 rounded" />
            <textarea placeholder="Description" value={subjectForm.description} onChange={(e) => setSubjectForm({...subjectForm, description: e.target.value})} className="w-full border border-teal-300 p-2 mb-3 rounded h-24" />
            <div className="flex gap-2">
              <button onClick={updateSubject} className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Save</button>
              <button onClick={() => setEditSubject(null)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Student Progress: {selectedStudent}</h2>
              <button onClick={() => setSelectedStudent(null)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            {studentProgress.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No quiz attempts yet</p>
            ) : (
              <div className="space-y-3">
                {studentProgress.map((progress, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{progress.subject}</h3>
                        <p className="text-sm text-gray-600">Unit {progress.unitId} - Module {progress.moduleId}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">{progress.percentage}%</div>
                        <div className="text-sm text-gray-600">{progress.score}/{progress.totalQuestions}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Completed: {new Date(progress.completedAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
