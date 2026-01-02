import { FeatureCard } from '../feature-card';

import { CustomField } from './custom-field';

export const CustomFieldsCard = () => {
  return (
    <FeatureCard className="col-span-1 md:col-span-5 flex flex-col justify-between">
      <div className="flex flex-col bg-card mx-6 rounded-b-md border border-t-0 divide-y">
        <CustomField inputDefault="Name" typeDefault="single_line_text" />
        <CustomField inputDefault="Color" typeDefault="color" />
        <CustomField inputDefault="" />
      </div>

      <footer className="p-6 pt-4 flex flex-col gap-2">
        <p className="font-medium">Built around your business</p>
        <p className="text-muted-foreground">
          Need to store data that doesn&apos;t fit in the defaults? Create custom fields for the
          info that matters to you.
        </p>
      </footer>
    </FeatureCard>
  );
};
