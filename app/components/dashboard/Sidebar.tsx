"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Info, LayoutDashboard, X } from "lucide-react";
import LogoutButton from "./LogoutButton";

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "About System", href: "/dashboard/about", icon: Info },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
            <div className="flex h-20 items-center justify-between px-6 border-b border-gray-800">
                <span className="text-xl font-bold tracking-tight text-blue-400 font-serif">AdminPanel</span>
                <button
                    onClick={onClose}
                    className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                >
                    <X className="h-6 w-6" />
                </button>
            </div>

            <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => onClose()}
                            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                ? "bg-gray-800 text-blue-400"
                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                        >
                            <item.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? "text-blue-400" : "text-gray-400 group-hover:text-white"}`} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto border-t border-gray-800 p-4">
                <LogoutButton />
            </div>
        </div>
    );
}