interface AdCardProps {
  name: string;
  description: string;
  price: number;
}

export const AdCard = (ad: AdCardProps) => {
  return (
    <article className="flex flex-col h-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800 mb-2">{ad.name}</h2>
      <p className="text-sm text-slate-600 mb-4">{ad.description}</p>
      <p className="text-sm font-bold text-slate-600 mb-4 ">{ad.price}</p>
    </article>
  );
};
