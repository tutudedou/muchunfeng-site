'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { nav, site } from '@/data/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '关闭' : '菜单'}
        </button>
        <nav id="main-nav" className="nav" data-open={open} aria-label="主导航">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
