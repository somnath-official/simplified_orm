import { QueryClauses } from "../@types/ClausesInterface";
import { supportedDBs } from "../DB";

export const build = (queryArray: QueryClauses, $table: string): string => {
  let query = ''
  switch (process.env.DB_CONNECTION) {
    case supportedDBs.mySQL:
    default:
      const select = queryArray.select
      const where = queryArray.where.join(' and ')
      query = `select ${select} from ${$table} ${where}`
  }
  return query
}