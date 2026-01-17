/**
 * -------------------------------------------------------
 * Problem: Missing Number
 * Link: https://leetcode.com/problems/missing-number/
 *
 * Category: Arrays
 * Pattern: Math / Summation
 * Difficulty: Easy
 *
 * Key Insight:
 * - The array contains numbers from 0 to n with exactly one missing.
 * - The sum of numbers from 0 to n is known using a formula.
 * - Subtracting the actual sum from the expected sum reveals the missing number.
 *
 * Approach:
 * 1. Compute expected sum = n * (n + 1) / 2
 * 2. Traverse the array and subtract each element from the expected sum
 * 3. The remaining value is the missing number
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Edge Cases:
 * - Missing number is 0
 * - Missing number is n
 * - Single-element array
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let total = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    total -= nums[i];
  }

  return total;
};

/**
 * Revision Notes:
 * - Elegant math-based solution
 * - Avoids extra space like hash sets
 * - XOR-based solution is another valid alternative
 */
