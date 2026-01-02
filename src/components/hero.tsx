import { Button } from './ui/button';
import { RoadHorizonIcon } from '@phosphor-icons/react/dist/ssr';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { Waitlist } from './waitlist/waitlist';

export const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto h-[calc(100svh-24px-32px)] grid items-center">
      <div className="flex flex-col gap-6 -mt-16">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground tracking-[0.14em]">v0.1.0</span>
          <h1 className="font-medium text-[48px] leading-tight md:text-[64px]">
            Build commerce that&apos;s <br className="hidden sm:inline" /> truly yours.
          </h1>
        </div>
        <p className="text-2xl">
          Lune is an open-source solution for <br className="hidden sm:inline" /> commerce
          management.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 w-full">
            <Waitlist />
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
