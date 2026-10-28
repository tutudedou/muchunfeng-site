'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import type { Img } from '@/data/site';

type Item = { img: Img; title: string; note: string };

export function Gallery({ items }: { items: Item[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <>
      <div className="gallery">
        {items.map((it, i) => (
          <button
            key={it.title}
            type="button"
            className="gallery__item"
            onClick={() => setActive(i)}
            aria-label={`查看大图：${it.title}`}
          >
            <div className="gallery__img">
              <Image src={it.img.src} alt={it.img.alt} width={it.img.w} height={it.img.h} />
            </div>
            <div className="gallery__cap">
              <strong>{it.title}</strong>
              <span>{it.note}</span>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title}>
          <button type="button" className="lightbox__close" onClick={close}>
            关闭
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => step(-1)}
            aria-label="上一张"
          >
            ‹
          </button>
          <Image src={current.img.src} alt={current.img.alt} width={current.img.w} height={current.img.h} />
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => step(1)}
            aria-label="下一张"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
