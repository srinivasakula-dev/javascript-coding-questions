/**
 * JavaScript Scope Interview Notes
 *
 * IIFE Full Form:
 * IIFE = Immediately Invoked Function Expression
 * → A function that runs immediately after it is defined
 */

console.log("----------- Case 1: var (Expected Output: 1 2 1 2) -----------");

/**
 * Case 1: Using var
 *
 * Key Concepts:
 * - var is function-scoped
 * - Variables are hoisted (initialized as undefined)
 * - catch(x) creates a block-scoped variable
 * - In non-strict mode, var x and catch x may share the same binding
 */

(function () {
  // Step 1: Hoisting happens
  // var x; var y;
  // x = undefined, y = undefined

  try {
    throw new Error(); // Step 2: Error thrown → goes to catch
  } catch (x) {
    // Step 3: x is block-scoped (error object)

    var x = 1, y = 2;
    // var y → function scoped → y = 2
    // var x → same name as catch(x)
    // In non-strict mode → shared binding → x becomes 1

    console.log(x); // 1
    console.log(y); // 2
  }

  // Step 4: Outside catch
  console.log(x); // 1
  console.log(y); // 2
})();



console.log("----------- Case 2: let (Expected Output: 1 2 undefined 2) -----------");

/**
 * Case 2: Using let
 *
 * Key Concepts:
 * - let is block-scoped
 * - Creates a new variable inside catch block
 * - Does NOT affect outer scope
 */

(function () {
  // Step 1: Hoisting
  // var y → hoisted (y = undefined)
  // No var x outside → x does NOT exist outside

  try {
    throw new Error();
  } catch (x) {
    // Step 2: x is block-scoped (error object)

    let x = 1; // New block-scoped variable (different from outer)
    var y = 2; // Function scoped

    console.log(x); // 1
    console.log(y); // 2
  }

  // Step 3: Outside catch
  // x is NOT defined here

  try {
    console.log(x); // ReferenceError (x is not defined)
  } catch (e) {
    console.log("undefined"); // For interview understanding
  }

  console.log(y); // 2
})();



/**
 * Final Summary:
 *
 * Case 1 (var):
 * Output:
 * 1
 * 2
 * 1
 * 2
 *
 * Case 2 (let):
 * Output:
 * 1
 * 2
 * undefined
 * 2
 *
 * Key Differences:
 * - var → function scoped → leaks outside
 * - let → block scoped → stays inside
 * - Same name with var → may share binding
 * - Same name with let → separate variable
 *
 * Interview One-Liner:
 * "var is function-scoped and may share binding with catch parameter,
 * while let is block-scoped and does not leak outside."
 */
