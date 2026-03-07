import { getAdById } from "@/lib/ads";
import { notFound } from "next/navigation";

type AdDetailParams = Promise<{
  id: string;
}>;

const AdDetail = async (props: { params: AdDetailParams }) => {
  const { id } = await props.params;

  const ad = await getAdById(Number(id));

  console.log("id", id);

  if (!ad) {
    return notFound();
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <article className="max-w-2xl w-full p-8 border border-slate-200 rounded-xl bg-white shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{ad.name}</h2>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          {ad.description}
        </p>
        <p className="text-2xl font-bold text-teal-600">{ad.price}€</p>
      </article>
    </div>
  );
};

export default AdDetail;
