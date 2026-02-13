/**
 * -------------------------------------------------------
 * Problem: Daily Temperatures
 * Link: https://neetcode.io/problems/daily-temperatures
 *
 * Category: Stack / Array
 * Pattern: Monotonic Decreasing Stack
 * Difficulty: Medium
 *
 * Key Insight:
 * - For each day, we need to find how many days until
 *   a warmer temperature occurs.
 * - A monotonic decreasing stack helps track unresolved days.
 * - When a warmer temperature is found, we resolve previous days.
 *
 * Approach:
 * 1. Initialize:
 *    - Result array filled with 0
 *    - Stack to store indices (not values)
 * 2. Traverse temperatures:
 *    - While current temperature is greater than the
 *      temperature at the index on top of stack:
 *        • Pop the index
 *        • Calculate difference in days
 *    - Push current index onto stack
 * 3. Return result array.
 *
 * Time Complexity: O(n)
 * - Each index is pushed and popped at most once.
 *
 * Space Complexity: O(n)
 * - Stack stores unresolved indices.
 *
 * Edge Cases:
 * - Strictly decreasing temperatures → all 0s
 * - Single day input
 * - Strictly increasing temperatures
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length;
    let ans = new Array(n).fill(0);
    let stack = []; // stores indices

    for (let i = 0; i < n; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let prevIndex = stack.pop();
            ans[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return ans;
};

/**
 * Revision Notes:
 * - Store indices instead of values to compute day differences.
 * - Stack maintains decreasing temperature order.
 * - Classic monotonic stack pattern for "next greater element" type problems.
 */
