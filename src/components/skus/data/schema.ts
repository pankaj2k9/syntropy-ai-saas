import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const skuSchema = z.object({
  id: z.string(),
  logo: z.string().optional().nullable(),
  title: z.string(),
  description: z.string(),
  vendor: z.string().optional().nullable(),
  ports: z.string(),
  type: z.string(),
  datasheet: z.string(),
})

export type SKU = z.infer<typeof skuSchema>

