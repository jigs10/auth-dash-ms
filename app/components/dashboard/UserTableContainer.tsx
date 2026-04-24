"use client";

import { useState, useEffect, useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    flexRender,
    SortingState,
} from "@tanstack/react-table";
import { ChevronUp, ChevronDown, ChevronsUpDown, Search } from "lucide-react";

export default function UserTableContainer() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(0);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState<SortingState>([{ id: "id", desc: false }]);

    const pageSize = 10;

    const columns = useMemo<ColumnDef<User>[]>(
        () => [
            { accessorKey: "id", header: "ID" },
            { accessorKey: "name", header: "Name" },
            { accessorKey: "email", header: "Email" },
        ],
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const sortField = sorting[0]?.id || "id";
            const sortOrder = sorting[0]?.desc ? "desc" : "asc";

            try {
                const query = new URLSearchParams({
                    page: (pageIndex + 1).toString(),
                    limit: pageSize.toString(),
                    sortBy: sortField,
                    order: sortOrder,
                    search: search,
                });

                const response = await fetch(`/api/users?${query.toString()}`);
                const result = await response.json();
                setData(result.users || []);
            } catch (error) {
                console.error("Failed to fetch users", error);
            } finally {
                setLoading(false);
            }
        };

        const debounceTimer = setTimeout(fetchData, 300);
        return () => clearTimeout(debounceTimer);
    }, [pageIndex, sorting, search]);

    const table = useReactTable({
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        manualSorting: true,
    });

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search by name, email, or ID (e.g. 'usr')..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPageIndex(0); // Reset to page 1 on new search
                    }}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md bg-white text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm min-w-[600px]">
                        <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase text-xs tracking-wider">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            className="px-6 py-4 font-bold cursor-pointer hover:bg-gray-100 transition-colors group"
                                            onClick={header.column.getToggleSortingHandler()}
                                        >
                                            <div className="flex items-center gap-2">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                <span className="text-gray-400">
                                                    {header.column.getIsSorted() === "asc" ? (
                                                        <ChevronUp className="h-4 w-4 text-blue-600" />
                                                    ) : header.column.getIsSorted() === "desc" ? (
                                                        <ChevronDown className="h-4 w-4 text-blue-600" />
                                                    ) : (
                                                        <ChevronsUpDown className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                                                    )}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-12 text-center text-gray-400 animate-pulse">
                                        Syncing with server...
                                    </td>
                                </tr>
                            ) : data.length > 0 ? (
                                table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="px-6 py-4 text-gray-700 whitespace-nowrap">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="px-6 py-12 text-center text-gray-400">
                                        No matching users found for "{search}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <button
                        onClick={() => setPageIndex((p) => Math.max(p - 1, 0))}
                        disabled={pageIndex === 0 || loading}
                        className="px-4 py-2 text-xs font-bold bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 transition-all uppercase"
                    >
                        Previous
                    </button>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                        Page {pageIndex + 1}
                    </span>
                    <button
                        onClick={() => setPageIndex((p) => p + 1)}
                        disabled={loading || data.length < pageSize}
                        className="px-4 py-2 text-xs font-bold bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 transition-all uppercase"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}