'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function NavLinks() {
    const links = [
        {name: "Home", href: "/dashboard", icon: "/houseicon.png"},
        {name: "My Cat", href: "/dashboard/my-cat", icon: "/caticon.png"},
        {name: "Ready Cats", href: "/dashboard/ready-cats", icon: "/hearticon.png"},
    ];
    const pathname = usePathname();
    return (
        <div className='bg-sky-100' style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px'}}>
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={pathname === link.href ? 'text-red-400' : 'text-black'}
                            style={{display: 'flex', alignItems: 'flex-end', padding: '10px'}}
                        >
                            <Image
                                src={link.icon}
                                alt={link.name}
                                width={32}
                                height={32}
                                style={{paddingRight: '10px'}}
                            />
                            <p>{link.name}</p>
                        </Link>
                    );
                })}             
        </div>
    );
}