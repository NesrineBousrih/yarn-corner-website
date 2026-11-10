import { ToastProvider } from '@/hooks/useToast';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { HomePage } from '@/pages/HomePage';

export default function App() {
  return (
    <ToastProvider>
      <a href="#collection" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-burgundy focus:px-4 focus:py-2 focus:text-cream">
        Skip to collection
      </a>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </ToastProvider>
  );
}
