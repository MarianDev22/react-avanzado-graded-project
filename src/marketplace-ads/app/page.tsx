import AdSection from "@/components/ad-section";
import AdSectionSkeleton from "@/components/ad-section-skeleton";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          Anuncios recientes
        </h1>
        <Suspense fallback={<AdSectionSkeleton />}>
          <AdSection />
        </Suspense>
      </div>
    </main>
  );
}
