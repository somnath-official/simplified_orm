import { supportedDBs } from "../DB"

export const buildWhereStatement = (args: any): string => {
  const dbColumnName = args[0]
  const comparison = args.length === 2 ? '=' : args[1]
  let dataToCheck = args.length === 2 ? args[1] : args[2]
  if (dataToCheck === null) dataToCheck = 'null'
  else if (dataToCheck === '') dataToCheck = "''"
  let whereString = ''

  switch (process.env.DB_CONNECTION) {
    case supportedDBs.mySQL:
    default:
      whereString = `where ${dbColumnName} ${comparison} ${dataToCheck}`
  }
  return whereString
}