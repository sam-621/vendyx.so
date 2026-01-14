import { CustomFieldsCard } from './custom-fields-card/custom-fields-card';
import { FulfillmentCard } from './fulfillment-card/fulfillment-card';
import { SectionTitle } from '../section-title';
import { VariantsCard } from './variants-card/variants-card';
import { ZonesCard } from './zones-card/zones-card';

export const Featured = () => {
  return (
    <section className="px-6">
      <div className="max-w-5xl m-auto flex flex-col gap-10">
        <SectionTitle headline="Simple by design" title="Powerful by default" />

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          <FulfillmentCard />
          <VariantsCard />
          <CustomFieldsCard />
          <ZonesCard />
        </div>
      </div>
    </section>
  );
};
