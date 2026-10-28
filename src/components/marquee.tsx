import { marquee } from '@/data/site';

export function Marquee() {
  // 内容重复一遍，配合 translateX(-50%) 实现无缝循环
  const items = [...marquee, ...marquee, ...marquee, ...marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
