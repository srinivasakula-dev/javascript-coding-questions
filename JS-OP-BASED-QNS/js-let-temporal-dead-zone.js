/**
 * JavaScript let + TDZ Interview Question
 *
 * Key Concepts:
 * - let and const are hoisted but NOT initialized
 * - They exist in Temporal Dead Zone (TDZ)
 */

console.log(x); // ❌ ReferenceError
let x = 5;

/**
 * Explanation:
 *
 * 1. let x is hoisted
 * 2. But it is NOT initialized
 * 3. It stays in TDZ (Temporal Dead Zone)
 * 4. Accessing it before initialization → ReferenceError
 *
 *
 * Final Output:
 * ReferenceError: Cannot access 'x' before initialization
 *
 *
 * Interview One-Liner:
 * "let variables are hoisted but remain in the Temporal Dead Zone until initialized,
 * so accessing them before declaration throws a ReferenceError."
 */
