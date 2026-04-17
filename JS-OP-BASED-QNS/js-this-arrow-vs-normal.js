/**
 * JavaScript "this" Interview Question
 *
 * Key Concept:
 * - Normal function → this depends on how function is called
 * - Arrow function → this is inherited from outer scope
 */

const obj = {
  value: 42,

  // Normal function → this = obj
  normalFunc: function () {
    return this.value;
  },

  // Arrow function → this = outer scope (global)
  arrowFunc: () => {
    return this.value;
  },
};

console.log(obj.normalFunc()); // 42
console.log(obj.arrowFunc());  // undefined


/**
 * Explanation:
 *
 * normalFunc:
 * - Called as obj.normalFunc()
 * - this → obj
 * - this.value → 42
 *
 * arrowFunc:
 * - No own this
 * - Takes this from outer (global scope)
 * - global object has no "value"
 * - So result → undefined
 *
 *
 * Final Output:
 * 42
 * undefined
 *
 *
 * Interview One-Liner:
 * "Arrow functions don’t have their own this; they inherit it from the surrounding scope,
 * while normal functions get this based on how they are called."
 */
