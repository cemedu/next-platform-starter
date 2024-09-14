
import { cookies } from "next/headers";
const { NextResponse } = require("next/server");

export async function GET(req) {
    try {
        cookies().delete('token');
        return NextResponse.json({
            success: true,
            message: 'Logout successfully!',
        });

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}