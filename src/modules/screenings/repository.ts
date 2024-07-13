import { Selectable } from 'kysely'
import type { Screening, Database } from '@/database'
import { keys } from './schema'

const TABLE = 'screening'
type Row = Screening
type RowSelect = Selectable<Row>

export default (db: Database) => ({
  findAll(): Promise<RowSelect> {
    return db.selectFrom(TABLE).select(keys).execute()
  },
})
