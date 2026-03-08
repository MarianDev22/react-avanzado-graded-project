import Link from "next/link";

const AdNotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <article className="max-w-md w-full p-8 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Anuncio no encontrado
        </h2>
        
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          El anuncio que estás buscando ya no existe o ha sido retirado.
        </p>
        
        <Link 
          href="/" 
          className="inline-block w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-md transition-colors"
        >
          Volver al listado de anuncios
        </Link>
      </article>
    </div>
  );
};

export default AdNotFound;