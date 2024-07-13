import createTestDatabase from '@tests/utils/createTestDatabase'
import { createFor } from '@tests/utils/records'
import { fakeScreening, screeningMatcher } from './utils'
import buildRepository from '../repository'

const db = await createTestDatabase()
const repository = buildRepository(db)
const createScreenings = createFor(db, 'screening')

afterAll(() => db.destroy())

afterEach(async () => {
  await db.deleteFrom('screening').execute()
})

describe('findAll', () => {
  it('returns all screenings', async () => {
    await createScreenings([fakeScreening()])
    const screenings = await repository.findAll()

    expect(screenings).toHaveLength(1)
    expect(screenings[0]).toEqual(screeningMatcher())
  })
})
