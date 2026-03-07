import { AdCardSkeleton } from "./ad-card-skeleton";


export default function AdSectionSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <AdCardSkeleton />
      <AdCardSkeleton />
      <AdCardSkeleton />
    </div>
  );
};