import { FeatureCard } from '@/components/feature-card';
import { FulfillmentCard } from '@/components/fulfillment-card/fulfillment-card';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <section className="max-w-5xl m-auto flex flex-col gap-10">
        <header>
          <span className="uppercase text-distinct leading-5 tracking-[0.12em]">
            Simple by design
          </span>
          <h2 className="font-medium text-[40px]">Powerful by default.</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <FulfillmentCard />
          <FeatureCard className="col-span-1 md:col-span-5"></FeatureCard>
          <FeatureCard className="col-span-1 md:col-span-5"></FeatureCard>
          <FeatureCard className="col-span-1 md:col-span-3"></FeatureCard>
        </div>
      </section>
    </div>
  );
}
