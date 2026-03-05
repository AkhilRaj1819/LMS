"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { SidebarProvider, useSidebar } from "./SidebarContext";

function MainLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { isOpen, setIsOpen } = useSidebar();

    const hideSidebar = pathname === "/pages/login" || pathname?.startsWith("/admin") || pathname === "/pages/admin-login";

    if (hideSidebar) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-[#F8F6F1]">
            <div className="flex relative">
                <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
                <div className="flex-1 sm:ml-[280px] w-full min-w-0">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <MainLayoutContent>{children}</MainLayoutContent>
        </SidebarProvider>
    );
}
