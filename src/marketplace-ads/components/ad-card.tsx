import Link from "next/link";
import { DeleteAdButton } from "./buttons/delete-ad-button";

interface AdCardProps {
  name: string;
  id: number;
  description: string;
  price: number;
  image?: string;
  createdAt: Date;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("es-Es", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const AdCard = (ad: AdCardProps) => {
  return (
    <article className="flex flex-col h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
      <h2 className="text-xl font-bold text-slate-800 mb-2">{ad.name}</h2>

      <p className="text-sm text-slate-600 mb-4 grow">{ad.description}</p>

      <div className="mt-auto flex items-end justify-between">
        <div className="text-sm font-bold text-slate-600">
          <p>{ad.price}€</p>
          <p>{formatDate(ad.createdAt)}</p>
        </div>

        <Link
          href={`/dashboard/ads/${ad.id}`}
          className="text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors"
        >
          Ver detalles
        </Link>
        <DeleteAdButton adId={ad.id} />
      </div>
    </article>
  );
};
