import { siteConfig } from '@/config/site';

export function AnnouncementBar() {
  if (!siteConfig.announcement) return null;
  return (
    <div className="bg-burgundy px-4 py-2.5 text-center text-xs tracking-[0.14em] text-cream/95 sm:text-[13px]">
      <span aria-hidden="true" className="mr-2 text-soft-rose">♡</span>
      {siteConfig.announcement}
    </div>
  );
}
