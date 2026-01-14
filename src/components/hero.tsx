import { Button } from './ui/button';
import { RoadHorizonIcon, SparkleIcon } from '@phosphor-icons/react/dist/ssr';
import { Badge } from './ui/badge';
import { BadgeCheckIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="px-6">
      <div className="max-w-5xl mx-auto h-[calc(100svh-24px-32px)] grid items-center">
        <div className="flex flex-col gap-6 -mt-16">
          <div className="flex flex-col">
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
              <BadgeCheckIcon />
              Early Access
            </Badge>
            <h1 className="font-medium text-[48px] leading-tight md:text-[64px]">
              Commerce management <br className="hidden sm:inline" /> for every business.
            </h1>
          </div>
          <p className="text-2xl">A flexible platform built for growth, designed for control.</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button className="rounded-full" asChild>
                <a target="_blank" href="https://cal.com/josh-gonzalez-kin5yk/general-help">
                  Get Vendyx
                </a>
              </Button>
              <Button size={'default'} variant={'outline'} className="rounded-full" asChild>
                <a href="http://demo.vendyx.so" target="_blank" rel="noopener noreferrer">
                  <SparkleIcon weight="duotone" /> Try Vendyx
                </a>
              </Button>
            </div>
            {/* <div className="flex items-center gap-4 w-full">
            <GetVendyx />
          </div> */}
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
      </div>
    </section>
  );
};
