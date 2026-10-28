import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { site } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${site.fullName}｜${site.city}${site.tagline}`,
    template: `%s｜${site.fullName}`,
  },
  description: site.description,
  keywords: ['旗袍定制', '手工旗袍', '旗袍教学', '广州旗袍', '非遗旗袍', site.name],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f1e7',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
