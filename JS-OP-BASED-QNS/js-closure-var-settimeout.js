/**
 * JavaScript Closure + var + setTimeout Interview Question
 *
 * Key Concepts:
 * - var is function-scoped (single shared variable)
 * - setTimeout runs after loop (async)
 * - Closures capture variable reference, not value
 */

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

/**
 * Step-by-Step:
 *
 * 1. var i is function-scoped → only ONE variable
 *
 * 2. Loop runs:
 *    i = 0 → 1 → 2 → 3
 *
 * 3. setTimeout callbacks are scheduled (not executed immediately)
 *
 * 4. Loop completes → i becomes 3
 *
 * 5. Callbacks execute → all use same i
 *
 *
 * Final Output:
 * 3
 * 3
 * 3
 *
 *
 * Interview One-Liner:
 * "Because var is function-scoped, all callbacks share the same variable i,
 * which becomes 3 after the loop ends."
 */
