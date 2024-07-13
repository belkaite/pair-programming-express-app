import { Router } from 'express'
import { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import { StatusCodes } from 'http-status-codes';

export default (db: Database) => {
  const router = Router()

  router.route('/').get(jsonRoute(async () => screenings.findAll()), StatusCodes.OK)


}
