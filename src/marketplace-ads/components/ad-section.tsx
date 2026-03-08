import { AdCard } from "./ad-card";

import { AdDto } from "@/types/ad.types";

export default async function AdSection({ items }: { items: AdDto[] }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
        {items.map((ad) => (
          <AdCard
            key={ad.id}
            id={ad.id}
            name={ad.name}
            description={ad.description}
            price={ad.price}
            createdAt={ad.createAt}
          />
        ))}
      </div>
    </>
  );
}
