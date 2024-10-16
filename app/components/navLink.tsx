"use client";

import Link from "next/link";

import { useGlobal } from "../globalState/Provider";

export default function NavLink({href, children}: { href: string, children: React.ReactNode }) {

    const [, dispatch] = useGlobal();

    return (
        <Link href = {href} onClick={() => dispatch({type: 'setPath', payload: href})}>
            {children}
        </Link>
    )
}