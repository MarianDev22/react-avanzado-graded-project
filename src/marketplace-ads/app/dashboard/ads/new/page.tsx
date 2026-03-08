import AdForm from "@/components/forms/ad-form";
import Link from "next/link";

export default function NewAdPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Link 
        href="/" 
        className="text-sm text-slate-500 hover:text-teal-600 mb-6 inline-block transition-colors"
      >
        ← Volver a Inicio
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 bg-slate-50/50">
          <h1 className="text-2xl font-bold text-slate-800">Vende algo nuevo</h1>
          <p className="text-slate-500 text-sm">Rellena los detalles para publicar tu anuncio en el marketplace.</p>
        </div>
        
        <div className="p-8">
          <AdForm />
        </div>
      </div>
    </div>
  );
}