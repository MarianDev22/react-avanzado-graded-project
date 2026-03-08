"use server";

import { createAd, deleteAd } from "@/lib/ads";
import { getSession } from "@/lib/auth";
import { adSchema } from "@/schemas/ad-schema";
import { revalidatePath } from "next/cache";

export interface AdActionResult {
  success: boolean;
  message: string;
  requestId: number;
  errors?: Record<string, string[]>;
}

export async function createAdAction(
  _previousState: AdActionResult,
  formData: FormData,
): Promise<AdActionResult> {
  const rawData = {
    name: String(formData.get("name")),
    description: String(formData.get("description")),
    price: Number(formData.get("price")),
  };

  const parsed = adSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Nombre y precio son obligatorios",
      requestId: Date.now(),
    };
  }

  try {
    const session = await getSession();
    if (!session) throw new Error("No logueado");

    await createAd({ ...parsed.data, userId: session.userId });

    revalidatePath("/");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Anuncio creado exitosamente",
      requestId: Date.now(),
    };
  } catch {
    return {
      success: false,
      message: "Error al crear el anuncio",
      requestId: Date.now(),
    };
  }
}

export async function deleteAdAction(
  _previousState: AdActionResult,
  formData: FormData,
): Promise<AdActionResult> {
  const adId = Number(formData.get("adId"));
  const session = await getSession();

  if (!session) {
    return {
      success: false,
      message: "No logueado",
      requestId: Date.now(),
    };
  }

  try {
    const success = await deleteAd(adId, session.userId);

    if (!success) {
      return {
        success: false,
        message: "No tienes permisos para borrar este anuncio",
        requestId: Date.now(),
      };
    }

    revalidatePath("/");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Anuncio borrado correctamente",
      requestId: Date.now(),
    };
  } catch {
    return {
      success: false,
      message: "Error técnico al intentar borrar",
      requestId: Date.now(),
    };
  }
}
