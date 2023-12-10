'use client'
import React from 'react';
import Link from 'next/link';
import navigation from '../utils/constants';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname()
  return (
    <nav>
      <ul className='flex gap-5 py-10'>
        {navigation.map((link, index)=>(
            <li key={index} className=''>
                <Link href={link.href} className={pathname === `${link.href}` ? 'text-blue-500 font-bold animate-pulse ':''}>{link.label}</Link>
            </li>
        ))}
      </ul>
        
    </nav>
  );
};

export default Nav;
