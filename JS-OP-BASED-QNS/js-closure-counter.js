/**
 * JavaScript Closure Interview Question
 *
 * Key Concepts:
 * - Closures allow functions to remember outer variables
 * - Each function call creates a new independent scope
 */

function counter() {
  let count = 0; // private variable

  return () => ++count; // closure
}

const a = counter();
const b = counter();

console.log(a()); // 1
console.log(a()); // 2
console.log(b()); // 1

/**
 * Explanation:
 *
 * 1. counter() creates a new scope each time
 * 2. 'a' and 'b' have separate 'count' variables
 *
 * a():
 * - first call → 1
 * - second call → 2
 *
 * b():
 * - first call → 1 (independent)
 *
 *
 * Final Output:
 * 1
 * 2
 * 1
 *
 *
 * Interview One-Liner:
 * "Each call to counter creates a new closure with its own state,
 * so 'a' and 'b' maintain independent count values."
 */
