/**
 * Converts Camel case string to snake case.
 * @param str string
 */
export const camelCaseToSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}