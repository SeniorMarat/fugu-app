import type { Selectable } from "orchid-orm"

import { BaseTable } from "../base"

export class UserTable extends BaseTable {
  override readonly table = "user"

  override columns = this.setColumns(t => ({
    id: t.id(),
    ...t.timestamps(),
    email: t.varchar().unique(),
    username: t.varchar().unique(),
    password: t.varchar(),
    balance: t.decimal().default("0"),
    walletId: t.integer().foreignKey("wallet", "id").unique(),
  }))
}

export type User = Selectable<UserTable>
