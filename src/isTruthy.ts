/**
 * A function that checks if the passed parameter is truthy in the *JavaScript* sense and narrows its type accordingly
 * @param data the variable to check
 * @signature
 *    R.isTruthy(data)
 * @returns true if the passed input is truthy, false otherwise
 * @example
 *    R.isTruthy('somethingElse') //=> true
 *    R.isTruthy(null) //=> false
 *    R.isTruthy(undefined) //=> false
 *    R.isTruthy(false) //=> false
 *    R.isTruthy(0) //=> false
 *    R.isTruthy('') //=> false
 *    R.isTruthy(NaN) //=> false
 * @category Guard
 */
export function isTruthy<T>(
  data: T
): data is Exclude<T, null | undefined | false | "" | 0> {
  if (data === "") return false;
  if (data === 0) return false;
  if (tostring(data) === "nan") return false;
  return !!data;
}
