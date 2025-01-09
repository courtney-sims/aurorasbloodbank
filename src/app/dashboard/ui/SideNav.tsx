'use client';

import NavLinks from './NavLinks';
import Link from 'next/link';
import Image from "next/image";

export default function SideNav() {
    return (
        <div style={{display: "flex", flexDirection: "column"}} className='bg-red-300'>
            <Link
                key="Aurora's Bloodbank"
                href="/"
                style={{display: "flex"}}
            >
                <Image
                    src="/aurora.jpeg"
                    alt="Aurora"
                    width={64}
                    height={85}
                />
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "5px"}}>
                    <h1>{"Aurora's"}</h1>
                    <h1>Bloodbank</h1>
                </div>
            </Link>
            <NavLinks/>
        </div>
    );
}