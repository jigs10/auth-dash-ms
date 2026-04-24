import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/app/types/index";

/**
 * Hardcoded credentials.
 */
const VALID_CREDENTIALS = {
    email: "admin@example.com",
    password: "password123",
};

const AUTH_TOKEN = process.env.AUTH_SESSION_SECRET || "session_token_2026_dev_mock";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Validation
        if (!email || !password) {
            return NextResponse.json(
                { message: "Email and password are required" },
                { status: 400 }
            );
        }

        // Mock Authentication Check
        if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {

            // Cookie
            const cookieStore = await cookies();
            cookieStore.set(AUTH_COOKIE_NAME, AUTH_TOKEN, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 60 * 60 * 24, // 1 day expiration
                path: "/",
            });

            return NextResponse.json(
                { message: "Login successful" },
                { status: 200 }
            );
        }

        // Unauthorized Response
        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );

    } catch (error) {
        // Error Handling
        console.error("LOGIN_API_ERROR:", error);
        return NextResponse.json(
            { message: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}