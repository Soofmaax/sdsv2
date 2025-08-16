import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { JsonLd, organizationSchema, reviewsSchema } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={reviewsSchema} />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <CartSidebar />
    </>
  );
}
