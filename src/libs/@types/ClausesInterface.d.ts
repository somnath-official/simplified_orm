export interface AvaibaleClauses {
  where: 'where',
  orWhere: 'orWhere',
  select: 'select',
  count: 'count'
}

export interface QueryClauses {
  where: string[]
  orWhere: string[]
  select: string[]
  count: string[]
}