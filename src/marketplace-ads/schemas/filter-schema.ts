import z from "zod";

export const filterSchema = z.object({
  query: z.string().optional().default(""),
  maxPrice: z.coerce.number().optional().default(0),
  order: z.enum(["asc", "desc"]).default("desc"),
});

export type FilterParams = z.infer<typeof filterSchema>;
