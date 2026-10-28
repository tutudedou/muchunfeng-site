import type { Metadata } from 'next';
import Link from 'next/link';
import { Gallery } from '@/components/gallery';
import { works } from '@/data/site';

export const metadata: Metadata = {
  title: '作品',
  description: '沐椿风手工旗袍作品：云纹立领、墨竹暗纹、盘扣与蕾丝细节。',
};

export default function WorksPage() {
  return (
    <>
      <div className="page-head container">
        <p className="eyebrow">作品</p>
        <h1>手作旗袍</h1>
        <p>点击图片查看大图。每一件都按本人尺寸单独制作。</p>
      </div>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <Gallery items={works} />
          <p style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/contact/" className="btn btn--solid">
              预约定制
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
