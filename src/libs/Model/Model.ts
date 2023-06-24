import { buildWhereStatement } from '../QueryBuildersHelper/Where'
import { createTableNameFromClassName } from '../utils/helper'

const avaibaleClauses = {
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
  private queryArray: any = []

  constructor() {
    this.boot()
    this.assignQueryClauses()
  }

  /**
   * Booting method of model
   */
  private boot(): void {
    this.$table = createTableNameFromClassName(this.constructor.name)
  }

  private assignQueryClauses(): void {
    Object.values(avaibaleClauses).forEach((clause: string) => {
      this.queryArray[`${clause}`] = []
    })
  }

  public get() {
    console.log(this)
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