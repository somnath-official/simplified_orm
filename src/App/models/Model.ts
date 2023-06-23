export class Model {
  /**
   * This helps to lock the model method channing
   */
  private isMethodChanninglLocked = false

  protected $table: string = ''
  protected $primaryKey: string = 'id'
  protected $columns: Array<string> = []
  protected $hidden: Array<string> = []

  protected CREATED_AT = 'created_at'
  protected UPDATED_AT = 'updated_at'
  protected DELETED_AT = 'deleted_at'

  constructor() {
    this.boot()
  }

  /**
   * Booting method of model
   */
  private boot(): void {
    this.$table = this.createTableNameFromClassName()
  }

  /**
   * Returns table name.
   * If $table value is not set then this generates 
   * table name based on derived class name
   * 
   * @returns string
   */
  private createTableNameFromClassName(): string {
    const modelName: string = this.constructor.name
    let snake_case = modelName.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace('_', '')
    return snake_case
  }

  public get(): this | void {
    console.log(this)
    if (this.isMethodChanninglLocked) { return }

    this.isMethodChanninglLocked = true
    return this
  }

  public where(...args: any): this {
    return this
  }
}