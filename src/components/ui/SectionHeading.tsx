import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: 'center' | 'left';
}

export function SectionHeading({ eyebrow, title, children, align = 'center' }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl leading-tight font-semibold text-burgundy sm:text-5xl">{title}</h2>
      <span aria-hidden="true" className={`mt-5 block h-px w-16 bg-soft-rose ${centered ? 'mx-auto' : ''}`} />
      {children && <div className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{children}</div>}
    </div>
  );
}
