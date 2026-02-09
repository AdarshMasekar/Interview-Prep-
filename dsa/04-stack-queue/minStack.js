/**
 * -------------------------------------------------------
 * Problem: Min Stack
 * Link: https://neetcode.io/problems/min-stack
 *
 * Category: Stack
 * Pattern: Auxiliary Stack
 * Difficulty: Medium
 *
 * Key Insight:
 * - We need to retrieve the minimum element in O(1) time.
 * - Maintain a separate stack that tracks the minimum value
 *   at each level of the main stack.
 *
 * Approach:
 * 1. Use two stacks:
 *    - stack: stores all values
 *    - minStack: stores current minimums
 * 2. On push:
 *    - Push value to stack
 *    - If minStack is empty or value <= current min,
 *      push it to minStack
 * 3. On pop:
 *    - Pop from stack
 *    - If popped value equals top of minStack, pop minStack
 * 4. Top and getMin operations are O(1).
 *
 * Time Complexity:
 * - push: O(1)
 * - pop: O(1)
 * - top: O(1)
 * - getMin: O(1)
 *
 * Space Complexity: O(n)
 * - Extra stack used to store minimum values
 *
 * Edge Cases:
 * - Multiple identical minimum values
 * - Stack becoming empty after pop
 *
 * -------------------------------------------------------
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);

    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Revision Notes:
 * - Using <= is important to handle duplicate minimum values.
 * - Two-stack approach is the clearest and safest solution.
 * - Alternative approach: store (value, minSoFar) pairs.
 */
