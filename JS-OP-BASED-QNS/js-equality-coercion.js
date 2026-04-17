/**
 * JavaScript == vs === Interview Question
 *
 * Key Concepts:
 * - == → loose equality (type coercion happens)
 * - === → strict equality (no type conversion)
 */

console.log(0 == false);   // true
console.log(0 === false);  // false
console.log("" == false);  // true
console.log("" === false); // false

/**
 * Explanation:
 *
 * 0 == false:
 * - false → 0
 * - 0 == 0 → true
 *
 * 0 === false:
 * - number !== boolean → false
 *
 * "" == false:
 * - false → 0
 * - "" → 0
 * - 0 == 0 → true
 *
 * "" === false:
 * - string !== boolean → false
 *
 *
 * Final Output:
 * true
 * false
 * true
 * false
 *
 *
 * Interview One-Liner:
 * "== performs type coercion, converting values before comparison,
 * while === checks both value and type strictly."
 */
