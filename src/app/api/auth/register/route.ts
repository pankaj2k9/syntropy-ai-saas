import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const hashedPassword = await hash(password, 10);

    await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword})
    `;
    return NextResponse.json({ message: 'User created successfully' });

  } catch (e:any) {
    // Log the error for server-side debugging.
    console.error(e);

    // Determine the status code based on the error (or set a default)
    const statusCode = e.code === '23505' ? 409 : 500; // Example: '23505' is a unique violation in PostgreSQL

    // Construct an error message, potentially sanitizing it to remove sensitive information
    const errorMessage = process.env.NODE_ENV === 'development' ? e.message : 'There was a problem with user registration.';
    return NextResponse.json({ status: statusCode, error: errorMessage });
  }
}
