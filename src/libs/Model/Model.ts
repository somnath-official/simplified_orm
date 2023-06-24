import { AvaibaleClauses, QueryClauses } from '../@types/ClausesInterface'
import { build } from '../QueryBuildersHelper/BuildQyery'
import { buildWhereStatement } from '../QueryBuildersHelper/Where'
import { createTableNameFromClassName } from '../Utils/helper'

const avaibaleClauses: AvaibaleClauses = {
  where: 'where',
  orWhere: 'orWhere',
  select: 'select',
  count: 'count'
}

export class Model {
  protected $table: string = ''
  protected $primaryKey: string = 'id'
  protected $columns: string[] = []
  protected $hidden: string[] = []
  protected CREATED_AT = 'created_at'
  protected UPDATED_AT = 'updated_at'
  protected DELETED_AT = 'deleted_at'
  private queryArray: QueryClauses = {
    select: ['*'],
    count: [],
    where: [],
    orWhere: []
  }

  constructor() {
    this.boot()
  }

  /**
   * Booting method of model
   */
  private boot(): void {
    this.$table = createTableNameFromClassName(this.constructor.name)
  }

  public get() {
    const queryStr = build(this.queryArray, this.$table)
    console.log(queryStr)
  }

  public where(...args: any): this {
    if (args.length <= 1 || args.length > 3) {
      throw Error('Invalid argunent list in where clause. Argument list must be 2 or 3.')
    }

    if (args[0] === '') throw new Error('Missing column name in where clause.')
    if (args.length === 3 && args[1] === '') throw new Error('Missing comparison operator in where clause.')
    this.queryArray[`${avaibaleClauses.where}`].push(buildWhereStatement(args))
    return this
  }
}