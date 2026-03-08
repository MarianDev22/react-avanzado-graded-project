import { getAds } from "@/lib/ads";
import { AdCard } from "./ad-card";
import { FilterParams } from "@/schemas/filter-schema";

export default async function AdSection({
  filters,
}: {
  filters: FilterParams;
}) {
  const ads = await getAds(filters);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
        {ads.map((ad) => (
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
