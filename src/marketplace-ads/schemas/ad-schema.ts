import { z } from "zod";

export const adSchema = z.object({
  name: z.string().min(3, "El nombre es muy corto"),
  description: z.string().min(10, "La descripción debe ser más detallada"),
  price: z.number().positive("El precio debe ser mayor a 0"),
});

export type CreateAdSchema = z.infer<typeof adSchema>;
