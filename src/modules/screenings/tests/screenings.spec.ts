import supertest from 'supertest'
import createTestDatabase from '@tests/utils/createTestDatabase'
import { createFor } from '@tests/utils/records'
import { fakeScreening, screeningMatcher } from './utils'
import createApp from '@/app'

const db = await createTestDatabase()
const app = createApp(db)

const createScreenings = createFor(db, 'screening')

afterEach(async () => {
  await db.deleteFrom('screening').execute()
})

describe('get', () => {
  it('should return a list of existing screenings', async () => {
    // arrange
    await createScreenings([fakeScreening()])

    // act

    const { body } = await supertest(app).get('/screening').expect(200)

    // assert

    expect(body).toEqual(screeningMatcher())

  })
})


