'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navlist() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav>
      <ul>
        <li>
          <Link className={pathname === '/' ? 'bg-red-700':""} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
        <Link href="/dashboard" scroll={false}>
  Dashboard
</Link>
        </li>
        <li>
        <Link href="/dashboard#settings">Settings</Link>
        </li>
      </ul>
    </nav>
  )
}