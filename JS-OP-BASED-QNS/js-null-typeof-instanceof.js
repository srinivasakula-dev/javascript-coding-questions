/**
 * JavaScript null Interview Question
 *
 * Key Concepts:
 * - null is a primitive value
 * - typeof null returns "object" (historical bug)
 * - instanceof checks prototype chain
 */

console.log(typeof null); // "object"
console.log(null instanceof Object); // false

/**
 * Explanation:
 *
 * typeof null:
 * - Returns "object"
 * - This is a known bug in JavaScript
 *
 * null instanceof Object:
 * - Checks if null has Object in its prototype chain
 * - null has no prototype
 * - So result is false
 *
 *
 * Final Output:
 * object
 * false
 *
 *
 * Interview One-Liner:
 * "typeof null returns 'object' due to a historical bug, but null is not an object,
 * which is why null instanceof Object is false."
 */
