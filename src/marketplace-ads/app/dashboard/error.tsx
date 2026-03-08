"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(`[${error.digest ?? "dashboard/error"}] detalles:`, error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <article className="max-w-md w-full p-8 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          ¡Algo salió mal!
        </h2>

        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          {error.message}
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={reset}
            className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-md transition-colors"
          >
            Intentar de nuevo
          </button>

          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors"
          >
            Volver a la página de inicio
          </Link>
        </div>
      </article>
    </div>
  );
}
