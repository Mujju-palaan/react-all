// components/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block py-2 duration-200 hover:text-orange-700 ${
        isActive ? 'text-orange-700' : 'text-gray-700'
      }`}
    >
      {children}
    </Link>
  );
}
