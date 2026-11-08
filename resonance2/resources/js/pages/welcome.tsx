import { Head } from '@inertiajs/react';
import Navbar from '@/components/Landing/Navbar';
import Hero from '@/components/Landing/Hero';
import StatsSection from '@/components/Landing/StatsSection';
import PartnersSection from '@/components/Landing/PartnersSection';
import SolutionsSection from '@/components/Landing/SolutionsSection';
import DeviceSyncSection from '@/components/Landing/DeviceSyncSection';
import ManageSection from '@/components/Landing/ManageSection';
import NewsletterSection from '@/components/Landing/NewsletterSection';
import TestimonialsSection from '@/components/Landing/TestimonialsSection';
import Footer from '@/components/Landing/Footer';

export default function Welcome() {
    return (
        <>
            <Head title="Resonance by Glenride - The Signal in The Sound">
                <meta name="description" content="Turn any broadcast into a smart beacon. Resonance embeds imperceptible trigger data into standard audio, allowing mobile devices to react in real-time." />
            </Head>

            <div className="min-h-screen">
                <Navbar />
                <Hero />
                <StatsSection />
                <PartnersSection />
                <SolutionsSection />
                <DeviceSyncSection />
                <ManageSection />
                <NewsletterSection />
                <TestimonialsSection />
                <Footer />
            </div>
        </>
    );
}
