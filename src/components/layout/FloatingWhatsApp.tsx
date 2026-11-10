import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/utils/order';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

/** Floating contact button — only appears once a WhatsApp number is configured. */
export function FloatingWhatsApp() {
  const url = getWhatsAppUrl(`Hello ${siteConfig.brandName}! I have a question.`);
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-5 z-40 flex items-center gap-2 rounded-full bg-burgundy p-3.5 text-cream shadow-lift transition duration-300 hover:-translate-y-0.5 hover:bg-burgundy-dark sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon size={24} />
      <span className="hidden pr-1 text-sm font-medium sm:inline">Chat with us</span>
    </a>
  );
}
