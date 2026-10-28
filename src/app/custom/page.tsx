import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Faq } from '@/components/faq';
import { customFaq, processSteps } from '@/data/site';

export const metadata: Metadata = {
  title: '旗袍定制',
  description: '从量体、选料、打板到手工缝制，沐椿风为你定制独一无二的旗袍。',
};

export default function CustomPage() {
  return (
    <>
      <div className="page-head container">
        <p className="eyebrow">定制</p>
        <h1>为你一人而做</h1>
        <p>从量体、打板到缝制，每一件旗袍都不套用成衣版型。</p>
      </div>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          {processSteps.map((s, i) => (
            <div className={`split${i % 2 ? ' split--reverse' : ''}`} key={s.no}>
              <div>
                <p className="split__no">{s.no}</p>
                <h2 className="title">{s.title}</h2>
                <p className="split__body">{s.body}</p>
              </div>
              <div className="split__media">
                <Image
                  className="frame"
                  src={s.img.src}
                  alt={s.img.alt}
                  width={s.img.w}
                  height={s.img.h}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--deep">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="section-head">
            <p className="eyebrow">常见问题</p>
            <h2 className="title">定制前你可能想问</h2>
          </div>
          <Faq items={customFaq} />
          <p style={{ marginTop: 40 }}>
            <Link href="/contact/" className="btn btn--solid">
              预约量体
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
