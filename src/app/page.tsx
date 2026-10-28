import Image from 'next/image';
import Link from 'next/link';
import { Marquee } from '@/components/marquee';
import { images, processSteps, site, works } from '@/data/site';

export default function HomePage() {
  const hero = images.storefront;
  const featured = works.slice(0, 3);

  return (
    <>
      <section className="hero">
        <Image
          className="hero__bg"
          src={hero.src}
          alt={hero.alt}
          width={hero.w}
          height={hero.h}
          priority
        />
        <div className="container hero__content">
          <h1>{site.name}</h1>
          <p className="hero__sub">{site.tagline}</p>
          <p className="hero__intro">{site.slogan}</p>
          <div className="hero__cta">
            <Link href="/contact/" className="btn btn--solid">
              预约量体
            </Link>
            <Link href="/works/" className="btn btn--light">
              浏览作品
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* 品牌介绍 */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">关于沐椿风</p>
            <h2 className="title">不只是一件衣裳</h2>
            <p className="split__body">
              {site.slogan}。{site.intro}
            </p>
            <p className="split__body">
              我们在{site.city}的小店里做旗袍定制，也教你亲手做一件。面料墙、线架和一整排旗袍工艺书，就是我们每天工作的样子。
            </p>
            <p style={{ marginTop: 28 }}>
              <Link href="/about/" className="btn">
                了解更多
              </Link>
            </p>
          </div>
          <div className="split__media">
            <Image
              className="frame"
              src={images.mannequin.src}
              alt={images.mannequin.alt}
              width={images.mannequin.w}
              height={images.mannequin.h}
            />
          </div>
        </div>
      </section>

      {/* 定制流程 */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">定制流程</p>
            <h2 className="title">从量体到缝制，每一步都亲手完成</h2>
          </div>
          <div className="grid grid--4">
            {processSteps.map((s) => (
              <div className="card" key={s.no} style={{ borderColor: 'rgba(246,241,231,.25)' }}>
                <p className="split__no" style={{ color: '#d9b99b' }}>
                  {s.no}
                </p>
                <h3>{s.title}</h3>
                <p style={{ color: 'rgba(246,241,231,.75)' }}>{s.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 40 }}>
            <Link href="/custom/" className="btn btn--light">
              查看定制详情
            </Link>
          </p>
        </div>
      </section>

      {/* 作品精选 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">作品精选</p>
            <h2 className="title">盘扣、云纹与墨竹</h2>
          </div>
          <div className="grid grid--3">
            {featured.map((w) => (
              <figure key={w.title} style={{ margin: 0 }}>
                <Image
                  className="frame"
                  src={w.img.src}
                  alt={w.img.alt}
                  width={w.img.w}
                  height={w.img.h}
                  style={{ aspectRatio: '3 / 4', objectFit: 'cover' }}
                />
                <figcaption className="gallery__cap">
                  <strong>{w.title}</strong>
                  <span>{w.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: 40 }}>
            <Link href="/works/" className="btn">
              查看全部作品
            </Link>
          </p>
        </div>
      </section>

      {/* 教学入口 */}
      <section className="section section--deep">
        <div className="container split split--reverse">
          <div>
            <p className="eyebrow">旗袍教学</p>
            <h2 className="title">想学，就亲手做一件</h2>
            <p className="split__body">
              从量体、打板到缝制，我们带你走完一件旗袍的完整过程。零基础也可以开始。
            </p>
            <p style={{ marginTop: 28 }}>
              <Link href="/teaching/" className="btn">
                了解教学
              </Link>
            </p>
          </div>
          <div className="split__media">
            <Image
              className="frame"
              src={images.studioHall.src}
              alt={images.studioHall.alt}
              width={images.studioHall.w}
              height={images.studioHall.h}
            />
          </div>
        </div>
      </section>

      {/* 预约 */}
      <section className="section cta">
        <div className="container">
          <h2 className="title">来店里坐坐，量一件属于你的旗袍</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {site.city} · {site.tagline}
          </p>
          <Link href="/contact/" className="btn btn--solid">
            预约到店
          </Link>
        </div>
      </section>
    </>
  );
}
