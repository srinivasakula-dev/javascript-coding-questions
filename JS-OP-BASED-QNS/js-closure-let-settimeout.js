/**
 * JavaScript Closure + let + setTimeout Interview Question
 *
 * Key Concepts:
 * - let is block-scoped
 * - Creates a new variable for each loop iteration
 * - Closures capture the correct value
 */

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

/**
 * Step-by-Step:
 *
 * 1. let creates a new i for each iteration
 *    i = 0, i = 1, i = 2 (all separate)
 *
 * 2. setTimeout schedules callbacks
 *
 * 3. Each callback captures its own i
 *
 *
 * Final Output:
 * 0
 * 1
 * 2
 *
 *
 * Interview One-Liner:
 * "let creates a new binding per iteration, so each callback gets its own copy of i."
 */
