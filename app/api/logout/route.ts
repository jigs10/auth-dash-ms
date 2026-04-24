import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/app/types/index";

export async function POST() {
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_COOKIE_NAME);

    return NextResponse.json({ message: "Logged out" });
}