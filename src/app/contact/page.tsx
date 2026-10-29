import type { Metadata } from 'next';
import Image from 'next/image';
import { asset, images, site } from '@/data/site';

export const metadata: Metadata = {
  title: '预约与联系',
  description: `预约${site.name}到店量体，或咨询旗袍教学。地址、电话与微信。`,
};

export default function ContactPage() {
  return (
    <>
      <div className="page-head container">
        <p className="eyebrow">预约</p>
        <h1>来店里坐坐</h1>
        <p>量体、看料、咨询课程，建议提前预约，我们为你留出时间。</p>
      </div>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container split">
          <div>
            <ul className="info-list">
              <li>
                <b>地址</b>
                <span>{site.address}</span>
              </li>
              <li>
                <b>电话</b>
                <span>{site.phone}</span>
              </li>
              <li>
                <b>微信</b>
                <span>{site.wechat}</span>
              </li>
              <li>
                <b>时间</b>
                <span>{site.hours}</span>
              </li>
            </ul>
            <div style={{ marginTop: 32 }}>
              {site.hasWechatQr ? (
                <Image src={asset('/images/wechat-qr.jpg')} alt="微信二维码" width={260} height={331} />
              ) : (
                <div className="qr-placeholder">微信二维码位置（待补充）</div>
              )}
            </div>
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
    </>
  );
}
