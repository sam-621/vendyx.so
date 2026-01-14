import {
  GlobeIcon,
  HeadsetIcon,
  PhoneCallIcon,
  PuzzlePieceIcon,
  TruckIcon
} from '@phosphor-icons/react/dist/ssr';
import { Button } from './ui/button';

export const CTA = () => {
  return (
    <section className="px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card border rounded-xl flex flex-col items-center justify-between gap-8 p-6 md:flex-row">
          <div className="flex flex-col gap-6 md:w-1/2 shrink-0">
            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-2xl">Create unique shopping experiences</h2>
              <p className="text-muted-foreground text-base">
                Let our team build your store. We handle the design, integrations, and setup.{' '}
                <br className="hidden" /> You get a store that&apos;s ready to sell from day one.
              </p>
            </div>
            <Button size={'lg'} className="rounded-full w-full md:w-fit md:px-16!" asChild>
              <a target="_blank" href="https://cal.com/josh-gonzalez-kin5yk/general-help">
                Talk to us <PhoneCallIcon weight="duotone" />
              </a>
            </Button>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3">
              <GlobeIcon size={20} weight="duotone" className="shrink-0" />{' '}
              <p className="font-medium">Online store tailored to your business</p>
            </div>
            <div className="flex items-center gap-3">
              <TruckIcon size={20} weight="duotone" className="shrink-0" />{' '}
              <p className="font-medium">Zone-based shipping rates for any region</p>
            </div>
            <div className="flex items-center gap-3">
              <PuzzlePieceIcon size={20} weight="duotone" className="shrink-0" />{' '}
              <p className="font-medium">Integrations with the tools you need</p>
            </div>
            <div className="flex items-center gap-3">
              <HeadsetIcon size={20} weight="duotone" className="shrink-0" />{' '}
              <p className="font-medium">Direct support from our team when needed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
