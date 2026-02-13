"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../../components/AdminSidebar";

export default function AdminAnalytics() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null) return;
    if (session && !session.user?.isAdmin) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-white flex">
      <AdminSidebar />
      <div className="flex-1 ml-14 bg-transparent pt-6 relative" style={{
        backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#FFFFFF'
      }}>
        <div className="max-w-[1050px] mx-auto px-6 py-6 relative z-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics and Reports</h1>
          <p className="text-gray-600 mb-8">Detailed insights and performance metrics</p>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500">Analytics dashboard coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}