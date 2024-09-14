import { cookies } from "next/headers";
const { NextResponse } = require("next/server");

export async function POST(req) {
    try {
        const { data } = await req.json();
        cookies().set('token', data?.token, { secure: true });
        return NextResponse.json({ success: true, message: 'Login successfully!' });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
};
