import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';

export default function Header() {
    // constants/navigation.ts
const NAV_LINKS = [
  { label: 'Redux-project', href: '/RTK-project' },
  { label: 'About', href: '/About' },
  { label: 'Contact', href: '/Contact' },
  { label: 'Practice', href: '/Practice' },
  { label: 'Github', href: '/Github' },
] as const;

  return (
    <header className="shadow sticky top-0 z-50">
      <nav className="bg-white px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              width={120}
              height={48}
              priority
            />
          </Link>

          {/* Auth buttons */}
          <div className="flex items-center lg:order-2 gap-2">
            <Link href="/login" className="text-sm font-medium">
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-orange-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-800"
            >
              Get started
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex lg:order-1">
            <ul className="flex gap-8 font-medium">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
