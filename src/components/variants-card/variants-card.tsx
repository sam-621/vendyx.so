import { CircleFadingPlusIcon } from 'lucide-react';
import { FeatureCard } from '../feature-card';
import { OptionPreview } from './option-preview';
import { Button } from '../ui/button';

export const VariantsCard = () => {
  return (
    <FeatureCard className="col-span-1 md:col-span-5 p-6 flex flex-col justify-between">
      <div className="border rounded-md divide-y bg-card">
        <OptionPreview
          title="Color"
          values={[
            { label: 'Black', color: '#000' },
            { label: 'White', color: '#FFF' },
            { label: 'Orange', color: '#c57701' },
            { label: 'Gray', color: '#7e7e7e' }
          ]}
        />

        <OptionPreview
          title="Size"
          values={[{ label: 'U' }, { label: 'S' }, { label: 'M' }, { label: 'L' }]}
        />

        <div className="flex py-2 hover:bg-muted/50 rounded-b-md">
          <Button
            type="button"
            variant="link"
            className="hover:no-underline p-0 h-full w-full justify-start"
          >
            <CircleFadingPlusIcon /> Add option
          </Button>
        </div>
      </div>

      <footer className="pt-4 flex flex-col gap-2">
        <p className="font-medium">Skip the busy work</p>
        <p className="text-muted-foreground">
          Add options, get variants. No manual entry, no missed combinations, no headaches.
        </p>
      </footer>
    </FeatureCard>
  );
};
