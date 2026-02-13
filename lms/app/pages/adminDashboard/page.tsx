"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../../components/AdminSidebar";
import OptionCard from "@/components/OptionCard";
import { OptionItem } from "@/types";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({ total: 0, students: 0, admins: 0 });
  const [leavesCount, setLeavesCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [recentLeaves, setRecentLeaves] = useState<any[]>([]);
  const [recentFeedback, setRecentFeedback] = useState<any[]>([]);
  const [lowPerformers, setLowPerformers] = useState<any[]>([]);
  const [topPerformers, setTopPerformers] = useState<any[]>([]);
  const [subjectCompletion, setSubjectCompletion] = useState<any[]>([]);
  const [totalQuizAttempts, setTotalQuizAttempts] = useState(0);

  useEffect(() => {
    if (session === null) return;
    if (session && !session.user?.isAdmin) {
      router.push("/");
      return;
    }
    if (session) {
      fetchStats();
    }
  }, [session, router]);

  const fetchStats = async () => {
    try {
      const [usersRes, leavesRes, feedbackRes, progressRes] = await Promise.all([
        fetch("/api/users/students"),
        fetch("/api/leaves"),
        fetch("/api/feedback"),
        fetch("/api/progress")
      ]);

      const usersData = await usersRes.json();
      const leavesData = await leavesRes.json();
      const feedbackData = await feedbackRes.json();
      const progressData = await progressRes.json();

      if (usersData.ok) {
        setStats({
          total: usersData.data.length,
          students: usersData.data.filter((u: any) => !u.isAdmin).length,
          admins: usersData.data.filter((u: any) => u.isAdmin).length
        });
      }
      
      setLeavesCount(Array.isArray(leavesData) ? leavesData.length : 0);
      setRecentLeaves(Array.isArray(leavesData) ? leavesData.slice(0, 3) : []);
      
      setFeedbackCount(Array.isArray(feedbackData) ? feedbackData.length : 0);
      setRecentFeedback(Array.isArray(feedbackData) ? feedbackData.slice(0, 3) : []);
      
      if (progressData.success && Array.isArray(progressData.data)) {
        setTotalQuizAttempts(progressData.data.length);
        
        const studentScores: any = {};
        const subjectStats: any = {};
        const studentUniqueAttempts: any = {};
        
        progressData.data.forEach((p: any) => {
          if (!p.subject) return;
          
          const key = `${p.userEmail}-${p.subject}-${p.unitId}-${p.moduleId}`;
          
          if (!studentUniqueAttempts[p.userEmail]) {
            studentUniqueAttempts[p.userEmail] = new Set();
          }
          
          if (!studentUniqueAttempts[p.userEmail].has(key)) {
            studentUniqueAttempts[p.userEmail].add(key);
            
            if (!studentScores[p.userEmail]) {
              studentScores[p.userEmail] = { email: p.userEmail, total: 0, count: 0 };
            }
            studentScores[p.userEmail].total += p.percentage;
            studentScores[p.userEmail].count++;
          }
          
          const subjectKey = `${p.userEmail}-${p.subject}-${p.unitId}-${p.moduleId}`;
          if (!subjectStats[p.subject]) {
            subjectStats[p.subject] = { subject: p.subject, uniqueAttempts: new Set(), totalScore: 0 };
          }
          if (!subjectStats[p.subject].uniqueAttempts.has(subjectKey)) {
            subjectStats[p.subject].uniqueAttempts.add(subjectKey);
            subjectStats[p.subject].totalScore += p.percentage;
          }
        });
        
        const lowPerformersData = Object.values(studentScores)
          .map((s: any) => ({ ...s, avg: s.total / s.count }))
          .filter((s: any) => s.avg < 60)
          .sort((a: any, b: any) => a.avg - b.avg)
          .slice(0, 5);
        
        const topPerformersData = Object.values(studentScores)
          .map((s: any) => ({ ...s, avg: s.total / s.count }))
          .filter((s: any) => s.count >= 3)
          .sort((a: any, b: any) => b.avg - a.avg)
          .slice(0, 5);
        
        const subjectCompletionData = Object.values(subjectStats)
          .map((s: any) => ({ 
            subject: s.subject, 
            attempts: s.uniqueAttempts.size,
            avgScore: (s.totalScore / s.uniqueAttempts.size).toFixed(1) 
          }))
          .sort((a: any, b: any) => b.attempts - a.attempts);
        
        setLowPerformers(lowPerformersData);
        setTopPerformers(topPerformersData);
        setSubjectCompletion(subjectCompletionData);
      }
    } catch (error) {
      console.error("Failed to fetch stats", error);
    }
  };

  const quickLinks: OptionItem[] = [
    {
      id: 1,
      name: "LiveBooks",
      link: "/pages/livebooks",
      img: "https://kalvium.community/assets/launcher-livebooks-logo-13706a15.svg",
      color: "#8CAAAF"
    },
    {
      id: 2,
      name: "Manage Users",
      link: "/pages/adminUsers",
      img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23374151'%3E%3Cpath d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'/%3E%3C/svg%3E",
      color: "#B9A2A7"
    },
    {
      id: 3,
      name: "Leave Applications",
      link: "/pages/adminLeaves",
      img: "https://kalvium.community/assets/launcher-attendance-logo-b26e5d0b.svg",
      color: "#97ABC3"
    },
    {
      id: 4,
      name: "Timetable",
      link: "/pages/adminTimetable",
      img: "https://kalvium.community/assets/launcher-calendar-logo-3350606d.svg",
      color: "#8B869B"
    },
    {
      id: 5,
      name: "Student Progress",
      link: "/pages/adminProgress",
      img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23374151'%3E%3Cpath d='M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z'/%3E%3C/svg%3E",
      color: "#8CAAAF"
    },
    {
      id: 6,
      name: "Feedback",
      link: "/pages/adminFeedback",
      img: "https://storage.googleapis.com/nucleus_public_assets_community/assets/livebooksV2/kalvi_support_icon.svg",
      color: "#FFA07A"
    },
    {
      id: 7,
      name: "Analytics",
      link: "/pages/adminAnalytics",
      img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23374151'%3E%3Cpath d='M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z'/%3E%3C/svg%3E",
      color: "#97ABC3"
    },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      <AdminSidebar />
      <div className="flex-1 ml-14 bg-transparent pt-6 relative" style={{
        backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#FFFFFF'
      }}>
        <div className="max-w-[1050px] mx-auto px-6 py-6 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {session?.user?.name || "Access user"}! Here's your system overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <p className="text-gray-500 text-sm font-medium mb-1">Total Users</p>
            <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
            <p className="text-xs text-green-600 mt-2 font-medium">Active accounts</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <p className="text-gray-500 text-sm font-medium mb-1">Students</p>
            <p className="text-3xl font-bold text-gray-800">{stats.students}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${(stats.students / (stats.total || 1)) * 100}%` }}></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <p className="text-gray-500 text-sm font-medium mb-1">Quiz Attempts</p>
            <p className="text-3xl font-bold text-gray-800">{totalQuizAttempts}</p>
            <p className="text-xs text-blue-600 mt-2 font-medium">Total submissions</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <p className="text-gray-500 text-sm font-medium mb-1">Pending Leaves</p>
            <p className="text-3xl font-bold text-gray-800">{leavesCount}</p>
            <p className="text-xs text-orange-500 mt-2 font-medium">Requires attention</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <p className="text-gray-500 text-sm font-medium mb-1">New Feedback</p>
            <p className="text-3xl font-bold text-gray-800">{feedbackCount}</p>
            <p className="text-xs text-gray-500 mt-2">Total submissions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer h-[280px] flex flex-col" onClick={() => router.push('/pages/adminLeaves')}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Leave Applications</h3>
            <div className="flex-1 overflow-y-auto">
              {recentLeaves.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent leaves</p>
              ) : (
                <div className="space-y-3">
                  {recentLeaves.map((leave) => (
                    <div key={leave._id} className="p-3 border-2 border-dotted border-gray-400">
                      <p className="font-medium text-sm text-gray-800">{leave.userName}</p>
                      <p className="text-xs text-gray-600">{new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}</p>
                      <p className="text-xs text-gray-500 mt-1">{leave.leaveType}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer h-[280px] flex flex-col" onClick={() => router.push('/pages/adminFeedback')}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Feedback</h3>
            <div className="flex-1 overflow-y-auto">
              {recentFeedback.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent feedback</p>
              ) : (
                <div className="space-y-3">
                  {recentFeedback.map((fb) => (
                    <div key={fb._id} className="p-3 border-2 border-dotted border-gray-400">
                      <p className="text-sm text-gray-800 line-clamp-2">{fb.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{new Date(fb.createdAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer h-[280px] flex flex-col" onClick={() => router.push('/pages/adminProgress')}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Students Needing Attention</h3>
            <div className="flex-1 overflow-y-auto">
              {lowPerformers.length === 0 ? (
                <p className="text-gray-500 text-sm">All students performing well</p>
              ) : (
                <div className="space-y-3">
                  {lowPerformers.map((student) => (
                    <div key={student.email} className="p-3 border-2 border-dotted border-gray-400">
                      <p className="font-medium text-sm text-gray-800">{student.email}</p>
                      <p className="text-xs text-red-600 font-semibold">Avg: {student.avg.toFixed(1)}%</p>
                      <p className="text-xs text-gray-500">{student.count} attempts</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer h-[320px] flex flex-col" onClick={() => router.push('/pages/adminProgress')}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🏆 Top Performing Students</h3>
            <div className="flex-1 overflow-y-auto">
              {topPerformers.length === 0 ? (
                <p className="text-gray-500 text-sm">No data available</p>
              ) : (
                <div className="space-y-3">
                  {topPerformers.map((student, idx) => (
                    <div key={student.email} className="p-3 border-2 border-dotted border-gray-400 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm text-gray-800">{student.email}</p>
                        <p className="text-xs text-gray-500">{student.count} attempts</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{student.avg.toFixed(1)}%</p>
                        <p className="text-xs text-gray-500">#{idx + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer h-[320px] flex flex-col" onClick={() => router.push('/pages/adminProgress')}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Subject-wise Quiz Completion</h3>
            <div className="flex-1 overflow-y-auto">
              {subjectCompletion.length === 0 ? (
                <p className="text-gray-500 text-sm">No data available</p>
              ) : (
                <div className="space-y-3">
                  {subjectCompletion.map((subject) => (
                    <div key={subject.subject} className="p-3 border-2 border-dotted border-gray-400">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-sm text-gray-800">{subject.subject}</p>
                        <p className="text-sm font-semibold text-purple-600">{subject.avgScore}%</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${subject.avgScore}%` }}></div>
                        </div>
                        <p className="text-xs text-gray-500">{subject.attempts} attempts</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mb-10">
          {quickLinks.map((link) => (
            <OptionCard key={link.id} item={link} className="h-36 w-full" iconSize="h-12 w-12" />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
