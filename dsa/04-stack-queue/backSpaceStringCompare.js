/**
 * -------------------------------------------------------
 * Problem: Backspace String Compare
 * Link: https://neetcode.io/problems/backspace-string-compare
 *
 * Category: String
 * Pattern: Stack Simulation
 * Difficulty: Easy
 *
 * Key Insight:
 * - '#' represents a backspace.
 * - We can simulate typing using a stack:
 *   - Normal character → push
 *   - '#' → pop (if stack not empty)
 * - After processing both strings, compare results.
 *
 * Approach:
 * 1. Create two stacks (one for each string).
 * 2. Traverse string `s`:
 *    - If character is not '#', push to stack.
 *    - If '#', pop if stack not empty.
 * 3. Repeat same process for string `t`.
 * 4. Compare final processed strings.
 *
 * Time Complexity: O(n + m)
 * - n = length of s
 * - m = length of t
 *
 * Space Complexity: O(n + m)
 * - Two stacks store processed characters.
 *
 * Edge Cases:
 * - Multiple consecutive '#'
 * - '#' at the beginning of string
 * - Strings reducing to empty
 *
 * -------------------------------------------------------
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let stack1 = [];
    let stack2 = [];

    for (let char of s) {
        if (char !== '#') {
            stack1.push(char);
        } else if (stack1.length > 0) {
            stack1.pop();
        }
    }

    for (let char of t) {
        if (char !== '#') {
            stack2.push(char);
        } else if (stack2.length > 0) {
            stack2.pop();
        }
    }

    return stack1.join('') === stack2.join('');
};

/**
 * Revision Notes:
 * - Straightforward stack simulation.
 * - Clean and easy to reason about.
 * - Can be optimized to O(1) space using two pointers
 *   scanning from right to left.
 */
