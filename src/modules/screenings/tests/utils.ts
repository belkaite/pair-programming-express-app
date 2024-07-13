import { expect } from 'vitest'
import type { Insertable } from 'kysely'
import type { Screening } from '@/database'


export const fakeScreening = (
  overrides: Partial<Insertable<Screening>> = {}
): Insertable<Screening> => ({
  bookedTickets: 0,
  movieId: 1,
  timestamp: '20240713',
  totalTickets: 10,
  ...overrides,
})


// export interface Screening {
//   bookedTickets: number
//   movieId: number
//   screeningId: Generated<number>
//   timestamp: string
//   totalTickets: number
// }

export const screeningMatcher = (
  overrides: Partial<Insertable<Screening>> = {}
) => ({
  screeningId: expect.any(Number),
  ...overrides, // for id
  ...fakeScreening(overrides),
})
