import Link from 'next/link';
import { nav, site } from '@/data/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h3>{site.name}</h3>
            <p>{site.tagline}</p>
            <p>{site.slogan}</p>
          </div>
          <nav className="footer__links" aria-label="页脚导航">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} {site.fullName} · {site.city}
        </p>
      </div>
    </footer>
  );
}
