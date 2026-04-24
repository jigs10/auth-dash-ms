import React, { Suspense } from "react";
import UserTableContainer from "@/app/components/dashboard/UserTableContainer";
export default async function DashboardPage() {
    return (
        <div className="space-y-6 py-6">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-tight text-gray-900 font-serif">User Directory</h1>
                <p className="mt-2 text-sm text-gray-500">
                    Manage and view user records with server-side pagination.
                </p>
            </div>

            <Suspense fallback={<TablePlaceholder />}>
                <UserTableContainer />
            </Suspense>
        </div>
    );
}

function TablePlaceholder() {
    return (
        <div className="w-full h-96 animate-pulse bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
            <p className="text-gray-400 font-medium">Fetching secure data...</p>
        </div>
    );
}