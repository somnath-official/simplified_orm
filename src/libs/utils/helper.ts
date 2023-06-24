import pluralize from "pluralize"
import { camelCaseToSnakeCase } from "./strings"

/**
 * Returns table name.
 * If $table value is not set then this generates table name based on derived class name
 * 
 * @param derivedClassName string
 * @returns string
 */
export const createTableNameFromClassName = (derivedClassName: string): string => {
  const pluralizedName = pluralize(derivedClassName)
  const snake_case = camelCaseToSnakeCase(pluralizedName)
  return snake_case.replace('_', '')  // Replacing initial _ with ''
}