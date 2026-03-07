import { AdCardSkeleton } from "@/components/ad-card-skeleton";

export default function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
      <AdCardSkeleton />
      <AdCardSkeleton />
      <AdCardSkeleton />
    </div>
  );
}
