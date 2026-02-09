/**
 * -------------------------------------------------------
 * Problem: Valid Parentheses
 * Link: https://neetcode.io/problems/valid-parentheses
 *
 * Category: Stack
 * Pattern: Stack + Hash Map
 * Difficulty: Easy
 *
 * Key Insight:
 * - Every closing bracket must match the most recent
 *   unmatched opening bracket.
 * - A stack naturally supports this LIFO behavior.
 *
 * Approach:
 * 1. Use a stack to store opening brackets.
 * 2. Use a map to match closing → opening brackets.
 * 3. Traverse the string:
 *    - If opening bracket → push to stack.
 *    - If closing bracket:
 *        • Stack must not be empty
 *        • Top of stack must match the closing bracket
 * 4. At the end, stack must be empty for a valid string.
 *
 * Time Complexity: O(n)
 * - Each character is processed once.
 *
 * Space Complexity: O(n)
 * - Stack can store up to all opening brackets.
 *
 * Edge Cases:
 * - Odd-length strings → invalid
 * - Closing bracket first → invalid
 * - Remaining opening brackets → invalid
 *
 * -------------------------------------------------------
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;

            const top = stack.pop();
            if (top !== map[char]) return false;
        }
    }

    return stack.length === 0;
};

/**
 * Revision Notes:
 * - Stack enforces correct nesting order.
 * - Early returns improve efficiency.
 * - Map avoids multiple conditional checks.
 * - Common mistake: forgetting to check stack emptiness at the end.
 */
