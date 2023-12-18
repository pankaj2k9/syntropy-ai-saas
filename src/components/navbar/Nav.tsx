import React from 'react'
import { getServerSession } from 'next-auth';
import SignOut from '../logout/SignOut';
import Link from 'next/link';

export default async function Nav() {
    const session = await getServerSession();
    return (
        <nav>
            {!!session && <SignOut />}
            {!session && <Link href="/login">Login</Link>}
        </nav>)
}


