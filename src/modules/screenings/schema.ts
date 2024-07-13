import { z } from 'zod'
import type { Screening } from '@/database'

type Record = Screening

const schema = z.object({
  bookedTickets: z.coerce.number().int().positive(),
  movieId: z.coerce.number().int().positive(),
  screeningId: z.coerce.number().int().positive(),
  timestamp: z.string().min(1),
  totalTickets: z.coerce.number().int().positive(),
})

export const keys: (keyof Record)[] = Object.keys(
  schema.shape
) as (keyof z.infer<typeof schema>)[]
