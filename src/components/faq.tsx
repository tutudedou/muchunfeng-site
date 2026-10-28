export function Faq({ items }: { items: { q: string; a: string }[] }) {
  // 使用原生 details/summary，无需 JS，键盘可操作
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
