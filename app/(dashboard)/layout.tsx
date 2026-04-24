"use client";

import { useState } from "react";
import Sidebar from "@/app/components/dashboard/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-4 z-20">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <span className="ml-4 text-xl font-bold text-blue-400 font-serif">AdminPanel</span>
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="flex-1 overflow-y-auto pt-16 lg:pt-0 p-4 md:p-8">
                <div className="mx-auto max-w-6xl">
                    {children}
                </div>
            </main>
            
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
}