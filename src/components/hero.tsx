import { Button } from './ui/button';
import { RoadHorizonIcon, SparkleIcon } from '@phosphor-icons/react/dist/ssr';

export const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto h-[calc(100svh-24px-32px)] grid items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground tracking-[0.14em]">v0.1.0</span>
          <h1 className="font-medium text-[48px] leading-tight md:leading-normal md:text-[64px]">
            Build commerce that&apos;s <br className="hidden sm:inline" /> truly yours.
          </h1>
        </div>
        <p className="text-2xl">
          Lune is an open-source solution for <br /> commerce management.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button size={'lg'} asChild>
              <a
                href="https://github.com/lunejs/lune/blob/main/docs/getting-started.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started
              </a>
            </Button>
            <Button size={'lg'} variant={'outline'} asChild>
              <a href="http://demo.lunejs.com" target="_blank" rel="noopener noreferrer">
                <SparkleIcon weight="duotone" /> Try Lune
              </a>
            </Button>
          </div>
          <Button variant={'link'} className="w-fit absolute bottom-6 right-6 sm:static" asChild>
            <a
              href="https://sam621.notion.site/2dc08342becf80b49625fd11ee0ef384?v=2dc08342becf80fdbdbe000cef2c8fcd&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoadHorizonIcon weight="duotone" /> View roadmap
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
