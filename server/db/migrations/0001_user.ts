import { change } from "../rake"

export default change(async (db) => {
  await db.createTable("user", t => ({
    id: t.id(),
    ...t.timestamps(),
    email: t.varchar().unique(),
    username: t.varchar().unique(),
  }))
})
