import { Router } from 'express'
import { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'

export default (db: Database) => {
  const router = Router()

  router.route('/').get(jsonRoute())




}
