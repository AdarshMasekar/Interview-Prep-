/**
 * -------------------------------------------------------
 * Problem: Remove All Adjacent Duplicates In String
 * Link: https://neetcode.io/problems/remove-adjacent-duplicates-in-string
 *
 * Category: String
 * Pattern: Stack
 * Difficulty: Easy
 *
 * Key Insight:
 * - Adjacent duplicate characters cancel each other out.
 * - A stack helps track the most recent character and
 *   remove duplicates in a single pass.
 *
 * Approach:
 * 1. Initialize an empty stack.
 * 2. Traverse each character in the string:
 *    - If current character equals stack top → pop.
 *    - Else → push the character.
 * 3. Join the stack to form the final string.
 *
 * Time Complexity: O(n)
 * - Each character is pushed and popped at most once.
 *
 * Space Complexity: O(n)
 * - Stack used to store characters.
 *
 * Edge Cases:
 * - Empty string
 * - String with no duplicates
 * - Entire string cancels out (e.g., "abba")
 *
 * -------------------------------------------------------
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];

    for (let char of s) {
        if (char === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

/**
 * Revision Notes:
 * - Stack simulates adjacent cancellation.
 * - Comparing with stack top avoids nested loops.
 * - Alternative: build result using array as string builder.
 */
