import { CTA } from '@/components/cta';
import { Featured } from '@/components/features/features';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex flex-col gap-40">
        <Featured />
        <CTA />
        <div />
      </div>
    </div>
  );
}
