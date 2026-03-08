"use client";

import { useFormStatus } from "react-dom";

export default function CreateAdButton() {
  // Es mejor pasar isPending como prop y manejar el estado con useActionState desde fuera
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-teal-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-sm hover:bg-teal-700 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Publicando anuncio..." : "Publicar Anuncio"}
    </button>
  );
}
