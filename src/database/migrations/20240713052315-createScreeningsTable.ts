import { Kysely, SqliteDatabase } from 'kysely'

export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('screening')
    .addColumn('screening_id', 'integer', (c) =>
      c.primaryKey().autoIncrement().notNull()
    )
    .addColumn('movie_id', 'integer', (c) =>
      c.references('movies.id').notNull()
    )
    .addColumn('timestamp', 'datetime', (c) => c.notNull())
    .addColumn('total_tickets', 'integer', (c) => c.notNull())
    .addColumn('booked_tickets', 'integer', (c) => c.notNull())
    .execute()
}

export async function down(db: Kysely<SqliteDatabase>) {
  await db.schema.dropTable('screening').execute()
}
