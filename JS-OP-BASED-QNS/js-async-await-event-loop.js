/**
 * Async/Await + Event Loop Interview Question
 *
 * Key Concept:
 * - await pauses async function
 * - Promise resolution/rejection handled in microtask queue
 * - Synchronous code runs first
 */

async function test() {
  try {
    console.log("1"); // Step 1: runs immediately

    await Promise.reject("Error");
    // Step 2: pauses function, moves to microtask queue

    console.log("2"); // ❌ never runs
  } catch (e) {
    console.log("3"); // Step 4: runs after microtask executes
  } finally {
    console.log("4"); // Step 5: always runs
  }
}

test();

console.log("5"); // Step 3: runs before catch/finally


/**
 * Final Output:
 * 1
 * 5
 * 3
 * 4
 *
 * Flow:
 * 1 → sync
 * 5 → sync
 * 3 → microtask (catch)
 * 4 → finally
 *
 * Interview One-Liner:
 * "await pauses execution and moves promise handling to microtask queue,
 * so synchronous code executes first, then catch and finally blocks run."
 */
