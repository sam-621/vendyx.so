'use client';

import { useState } from 'react';
import { FeatureCard } from '../feature-card';
import { Checkbox } from '../ui/checkbox';
import { FulfillmentCardItem } from './fulfillment-card-item';

export const FulfillmentCard = () => {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <FeatureCard className="col-span-1 md:col-span-3">
      <div className="bg-card mx-4 rounded-b-md border border-t-0">
        <header className="flex flex-col gap-2 border-b px-4 pt-3 pb-4">
          <p className="font-platform font-semibold text-lg leading-none">Add fulfillment</p>
          <p className="font-platform text-muted-foreground text-sm">
            Select lines you want to fulfill
          </p>
        </header>
        <label className="py-4 px-4 flex items-center gap-2 border-b">
          <Checkbox
            checked={selected.length === 2}
            onCheckedChange={value => {
              if (value) setSelected([2, 3]);
              else setSelected([]);
            }}
          />
          <p className="text-sm font-medium font-platform leading-none">Select all</p>
        </label>
        <div className="flex flex-col divide-y">
          <FulfillmentCardItem baseQuantity={3} selected={selected} setSelected={setSelected} />
          <FulfillmentCardItem baseQuantity={2} selected={selected} setSelected={setSelected} />
        </div>
      </div>
      <footer className="p-6 pt-4 flex flex-col gap-2">
        <p className="font-medium">Ship what&apos;s ready</p>
        <p className="text-muted-foreground">
          Partially fulfill orders in a few clicks. Ship now, complete the rest later.
        </p>
      </footer>
    </FeatureCard>
  );
};
