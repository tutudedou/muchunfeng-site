import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Faq } from '@/components/faq';
import { images, teachingFaq, teachingPoints } from '@/data/site';

export const metadata: Metadata = {
  title: '旗袍教学',
  description: '沐椿风旗袍教学：量体、打板、手工缝制，亲手完成一件属于自己的旗袍。',
};

export default function TeachingPage() {
  return (
    <>
      <div className="page-head container">
        <p className="eyebrow">教学</p>
        <h1>亲手做一件旗袍</h1>
        <p>不只是看，是亲手触摸传统的温度。</p>
      </div>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container split">
          <div>
            <h2 className="title">在工作室里，从头学到尾</h2>
            <p className="split__body">
              教学就在店里进行。面料、线材和工艺书籍都在手边，老师会陪着你从量体开始，一步步做到成衣。
            </p>
          </div>
          <div className="split__media">
            <Image
              className="frame"
              src={images.books.src}
              alt={images.books.alt}
              width={images.books.w}
              height={images.books.h}
            />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">你会学到</p>
            <h2 className="title">四个环节，完整的手作过程</h2>
          </div>
          <div className="grid grid--4">
            {teachingPoints.map((p) => (
              <div className="card" key={p.title} style={{ borderColor: 'rgba(246,241,231,.25)' }}>
                <h3>{p.title}</h3>
                <p style={{ color: 'rgba(246,241,231,.75)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="section-head">
            <p className="eyebrow">常见问题</p>
            <h2 className="title">报名前先了解</h2>
          </div>
          <Faq items={teachingFaq} />
          <p style={{ marginTop: 40 }}>
            <Link href="/contact/" className="btn btn--solid">
              咨询报名
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
