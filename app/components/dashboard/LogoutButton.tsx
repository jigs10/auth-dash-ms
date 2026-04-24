"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleLogout = async () => {
        startTransition(async () => {
            // 1. Call the API we made earlier to clear the cookie
            await fetch("/api/logout", { method: "POST" });

            // 2. Refresh and redirect safely
            router.refresh();
            router.push("/login");
        });
    };

    return (
        <button
            onClick={handleLogout}
            disabled={isPending}
            className="group flex w-full items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors disabled:opacity-50"
        >
            <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-white" />
            {isPending ? "Logging out..." : "Log out"}
        </button>
    );
}