"use client";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(`[${error.digest ?? "global-error"}] detalles:`, error);
  }, [error]);

  return (
    <html lang="es">
      <body className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
        <article className="max-w-md w-full p-8 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Algo salió mal!</h2>
          
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            {error.message ?? "Ha ocurrido un error inesperado en la aplicación."}
          </p>

          <button
            onClick={reset}
            className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-md transition-colors"
          >
            Intentar de nuevo
          </button>
        </article>
      </body>
    </html>
  );
}