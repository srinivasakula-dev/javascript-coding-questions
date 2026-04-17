/**
 * JavaScript Hoisting Interview Question
 *
 * Key Concepts:
 * - Function declarations are fully hoisted
 * - var variables are hoisted but initialized as undefined
 */

console.log(foo()); // "foo"
console.log(bar);   // undefined

function foo() { return "foo"; }

var bar = "bar";

/**
 * Explanation:
 *
 * Hoisting phase:
 * - function foo() → fully hoisted
 * - var bar → declared but value = undefined
 *
 * Execution:
 * - foo() works → returns "foo"
 * - bar is undefined at this point
 *
 *
 * Final Output:
 * foo
 * undefined
 *
 *
 * Interview One-Liner:
 * "Function declarations are fully hoisted, while var variables are hoisted but initialized as undefined."
 */
