/**
 * -------------------------------------------------------
 * Problem: Find All Numbers Disappeared in an Array
 * Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * Category: Arrays
 * Pattern: Hash Set
 * Difficulty: Easy
 *
 * Key Insight:
 * - The array contains numbers from 1 to n.
 * - Missing numbers are those that never appear in the array.
 * - Using a Set allows O(1) lookups to detect missing values.
 *
 * Approach:
 * 1. Store all elements of the array in a Set
 * 2. Iterate from 1 to n
 * 3. If a number is not in the Set, add it to the result
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - No missing numbers → []
 * - All numbers are missing except duplicates
 * - Array with a single element
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const set = new Set(nums);
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
};

/**
 * Revision Notes:
 * - Very readable and beginner-friendly approach
 * - Optimal solution exists using in-place marking (O(1) extra space)
 * - Set-based solution is easier to reason about
 */
