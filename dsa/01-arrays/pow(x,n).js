/**
 * -------------------------------------------------------
 * Problem: Pow(x, n)
 * Link: https://leetcode.com/problems/powx-n/
 *
 * Category: Math
 * Pattern: Binary Exponentiation
 * Difficulty: Medium
 *
 * Key Insight:
 * - Repeated multiplication is inefficient for large n.
 * - Using binary exponentiation reduces time complexity
 *   by squaring the base and halving the exponent.
 * - Negative powers can be handled by taking the reciprocal.
 *
 * Approach:
 * 1. Handle base case: if n == 0 → return 1
 * 2. If n < 0:
 *    - Convert x = 1 / x
 *    - Make n positive
 * 3. Initialize result = 1
 * 4. While n > 0:
 *    - If n is odd → multiply result by x
 *    - Square x
 *    - Divide n by 2
 * 5. Return result
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Edge Cases:
 * - n = 0
 * - n < 0
 * - x = 0 or x = 1
 *
 * -------------------------------------------------------
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;

  while (n > 0) {
    if (n % 2 === 1) {
      result *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }

  return result;
};

/**
 * Revision Notes:
 * - Also known as Fast Power Algorithm
 * - Recursive version is equally valid
 * - Prevents TLE for large exponent values
 */
