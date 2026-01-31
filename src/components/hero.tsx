import { Button } from './ui/button';
import { Logo } from './logo';

export const Hero = () => {
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center py-40">
        <div className="flex items-center gap-3 mb-6">
          <Logo />
          <span className="font-normal text-lg">Vendyx</span>
        </div>
        <h1 className="font-medium text-[48px] leading-tight md:text-[64px]">
          Commerce management <br className="hidden sm:inline" /> for every business.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-2xl">
          A flexible platform built for growth, designed for control.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <Button size={'lg'} className="rounded-full" asChild>
            <a target="_blank" href="https://cal.com/josh-gonzalez-kin5yk/general-help">
              Get Vendyx
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
