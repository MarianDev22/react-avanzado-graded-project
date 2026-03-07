import { AdCard } from "@/components/ad-card";
import { getAds } from "@/lib/ads";

export const dynamic = "force-dynamic";

export default async function Home() {
  const ads = await getAds();
  return (
    <main className="min-h-screen bg-slate-50 py-12 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {ads.map((ad) => (
            <AdCard
              key={ad.id}
              name={ad.name}
              description={ad.description}
              price={ad.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
