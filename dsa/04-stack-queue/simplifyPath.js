/**
 * -------------------------------------------------------
 * Problem: Simplify Path
 * Link: https://leetcode.com/problems/simplify-path/
 *
 * Category: Strings, Stack
 * Pattern: Stack Simulation
 * Difficulty: Medium
 *
 * Key Insight:
 * - Unix paths can be simplified by processing each
 *   directory token one by one.
 * - A stack naturally represents directory navigation:
 *   push for entering, pop for going back.
 *
 * Rules:
 * - ".."  → move to parent directory (pop stack)
 * - "."   → stay in current directory (ignore)
 * - ""    → ignore (caused by multiple slashes)
 * - valid names → push to stack
 *
 * Approach:
 * 1. Split the path by "/"
 * 2. Traverse each part:
 *    - ".." → pop from stack if possible
 *    - "." or "" → ignore
 *    - directory name → push to stack
 * 3. Join stack with "/" and prefix with root "/"
 *
 * Time Complexity: O(n)
 * - n = length of the path
 *
 * Space Complexity: O(n)
 * - Stack stores directory names
 *
 * Edge Cases:
 * - Multiple slashes ("//")
 * - Root directory only ("/")
 * - Excess ".." at root
 * - Directory names like "..."
 *
 * -------------------------------------------------------
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const parts = path.split('/');

  for (const part of parts) {
    if (part === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (part === '' || part === '.') {
      continue;
    } else {
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
};

/**
 * Revision Notes:
 * - Stack is the most intuitive data structure here
 * - Avoids regex or complex string manipulation
 * - Mirrors real Unix path resolution
 * - Very common system-design-adjacent problem
 */
