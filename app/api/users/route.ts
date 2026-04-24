import { NextResponse } from "next/server";

// Mock Data
const MOCK_USERS = Array.from({ length: 50 }, (_, i) => ({
    id: `USR-${1000 + i}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
}));

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // Parse Query Params
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search")?.toLowerCase() || "";
    const sortBy = (searchParams.get("sortBy") || "id") as "id" | "name" | "email";
    const order = searchParams.get("order") || "asc";

    // FILTERING (Case-Insensitive)
    let filteredData = MOCK_USERS.filter((user) => {
        return (
            user.name.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search) ||
            user.id.toLowerCase().includes(search)
        );
    });

    // SORTING
    filteredData.sort((a, b) => {
        const valA = a[sortBy].toString().toLowerCase();
        const valB = b[sortBy].toString().toLowerCase();

        if (order === "asc") {
            return valA.localeCompare(valB, undefined, { numeric: true });
        } else {
            return valB.localeCompare(valA, undefined, { numeric: true });
        }
    });

    // PAGINATION
    const startIndex = (page - 1) * limit;
    const paginatedData = filteredData.slice(startIndex, startIndex + limit);

    return NextResponse.json({
        users: paginatedData,
        total: filteredData.length,
        page,
        limit,
    });
}