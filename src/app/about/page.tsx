import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { images, site } from '@/data/site';

export const metadata: Metadata = {
  title: '关于我们',
  description: `关于${site.name}：${site.city}的非遗旗袍定制与教学工作室。`,
};

const gallery = [images.studioHall, images.threadWall, images.fabricWallWide, images.teaCorner];

export default function AboutPage() {
  return (
    <>
      <div className="page-head container">
        <p className="eyebrow">关于</p>
        <h1>{site.name}</h1>
        <p>{site.slogan}</p>
      </div>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container split">
          <div>
            <h2 className="title">一间做旗袍的小店</h2>
            <p className="split__body">
              {site.name}在{site.city}，做非遗手工旗袍的定制与教学。{site.intro}
            </p>
            <p className="split__body">
              推开门，是整面墙的面料、一排排颜色各异的缝纫线、挂满盘扣的成衣，以及茶桌边慢慢聊款式的时间。我们希望做旗袍这件事，本身也是一种享受。
            </p>
            {/* 品牌故事、匠人介绍请在这里补充 */}
          </div>
          <div className="split__media">
            <Image
              className="frame"
              src={images.storefront.src}
              alt={images.storefront.alt}
              width={images.storefront.w}
              height={images.storefront.h}
            />
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">工作室</p>
            <h2 className="title">我们的空间</h2>
          </div>
          <div className="grid grid--4">
            {gallery.map((g) => (
              <Image
                key={g.src}
                className="frame"
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
              />
            ))}
          </div>
          <p style={{ marginTop: 40 }}>
            <Link href="/contact/" className="btn btn--solid">
              来店看看
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
