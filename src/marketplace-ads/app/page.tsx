import AdSection from "@/components/ad-section";
import AdSectionSkeleton from "@/components/ad-section-skeleton";
import SearchBar from "@/components/forms/search-bar";
import { filterSchema } from "@/schemas/filter-schema";
import { HomePageSearchParams } from "@/types/search-params";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home(props: {
  searchParams: HomePageSearchParams;
}) {
  const rawParams = await props.searchParams;
  const validatedFilters = filterSchema.parse(rawParams);
  const query = validatedFilters.query;
  const order = validatedFilters.order;
  const maxPrice = validatedFilters.maxPrice;

  return (
    <main className="min-h-screen bg-slate-50 py-12 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <SearchBar
          initialQuery={query}
          initialOrder={order}
          initialPrice={maxPrice}
        />
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          Anuncios recientes
        </h1>
        <Suspense fallback={<AdSectionSkeleton />}>
          <AdSection filters={validatedFilters} />
        </Suspense>
      </div>
    </main>
  );
}
