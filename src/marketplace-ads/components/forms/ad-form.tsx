"use client";

import { createAdAction } from "@/app/dashboard/ads/new/actions";
import { useActionState } from "react";
import CreateAdButton from "../buttons/create-ad-button";

const initialState = { success: false, message: "", requestId: 0 };

export default function AdForm() {
  const [state, formAction] = useActionState(createAdAction, initialState);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 border p-6 rounded-xl bg-white"
    >
      <h2 className="text-xl font-bold">Nuevo Anuncio</h2>

      <input
        name="name"
        placeholder="Nombre del producto"
        className="border p-2 rounded"
      />
      <input
        name="price"
        type="number"
        placeholder="Precio"
        className="border p-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Descripción"
        className="border p-2 rounded"
      />
      <input 
        name="image" 
        type="url" 
        placeholder="URL de la imagen (ej: https://...)" 
        className="border p-2 rounded" 
      />

      <CreateAdButton />

      {state.message && (
        <p
          className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
