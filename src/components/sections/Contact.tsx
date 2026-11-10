import type { ReactNode } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getInstagramProfileUrl, getInstagramUsername, getWhatsAppUrl } from '@/utils/order';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  detail: string;
  href?: string | null;
  cta?: string;
}

function ContactCard({ icon, title, detail, href, cta }: ContactCardProps) {
  const content = (
    <>
      <span className="grid size-14 place-items-center rounded-full bg-petal text-burgundy transition duration-300 group-hover:bg-burgundy group-hover:text-cream">
        {icon}
      </span>
      <h3 className="mt-6 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm break-words text-muted">{detail}</p>
      {href && cta && (
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-burgundy">
          {cta}
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  );

  const base = 'group flex flex-col items-center rounded-[1.75rem] border border-blush/70 bg-white p-8 text-center shadow-soft';
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} transition duration-300 hover:-translate-y-1 hover:shadow-lift`}>
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
}

export function Contact() {
  const instagram = getInstagramProfileUrl();
  const username = getInstagramUsername();
  const whatsapp = getWhatsAppUrl(`Hello ${siteConfig.brandName}! I would like some information.`);

  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Contact" title="We'd love to hear from you">
          For orders, questions or a little chat about your favorite colors, send us a message.
        </SectionHeading>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          <ContactCard
            icon={<InstagramIcon size={24} />}
            title="Instagram"
            detail={username ? `@${username}` : 'Link coming soon'}
            href={instagram}
            cta="Follow us"
          />
          <ContactCard
            icon={<WhatsAppIcon size={24} />}
            title="WhatsApp"
            detail={whatsapp ? siteConfig.phoneDisplay : 'Coming soon'}
            href={whatsapp}
            cta="Chat with us"
          />
          <ContactCard icon={<MapPin size={24} strokeWidth={1.6} />} title="Location" detail={`Handmade in ${siteConfig.location}`} />
        </div>
      </div>
    </section>
  );
}
