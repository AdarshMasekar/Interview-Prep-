/**
 * -------------------------------------------------------
 * Problem: Implement Stack using Queues
 * Link: https://neetcode.io/problems/implement-stack-using-queues
 *
 * Category: Stack / Queue
 * Pattern: Simulation
 * Difficulty: Easy
 *
 * Key Insight:
 * - A stack follows LIFO (Last In First Out).
 * - A queue follows FIFO (First In First Out).
 * - To simulate stack behavior using one queue,
 *   rotate the queue after each push so the
 *   most recently added element comes to the front.
 *
 * Approach:
 * 1. Use a single queue (array).
 * 2. On push(x):
 *    - Add element to queue.
 *    - Rotate the queue (length - 1 times)
 *      so the new element moves to the front.
 * 3. pop():
 *    - Remove from front (shift).
 * 4. top():
 *    - Return front element.
 * 5. empty():
 *    - Check if queue length is zero.
 *
 * Time Complexity:
 * - push: O(n)   (due to rotation)
 * - pop: O(1)
 * - top: O(1)
 * - empty: O(1)
 *
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - Popping from empty stack (handled by constraints)
 * - Single element operations
 *
 * -------------------------------------------------------
 */

var MyStack = function () {
    this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);

    // Rotate queue to simulate stack behavior
    for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0;
};

/**
 * Revision Notes:
 * - Rotation ensures newest element is always at front.
 * - This is the single-queue solution.
 * - Alternative approach: use two queues.
 * - Tradeoff: push is O(n), but pop becomes O(1).
 */
