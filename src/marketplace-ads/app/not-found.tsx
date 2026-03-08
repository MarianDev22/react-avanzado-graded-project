import Link from "next/link";

export default function AdsNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 border border-slate-200 rounded-xl bg-white shadow-sm text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Página no encontrada</h2>
      <p className="text-sm text-slate-600 mb-6">
        La página que estás buscando no existe.
      </p>
      <Link 
        href="/" 
        className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-md transition-colors"
      >
        Volver al incio
      </Link>
    </div>
  );
}