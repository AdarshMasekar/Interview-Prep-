/**
 * -------------------------------------------------------
 * Problem: Majority Element
 * Link: https://leetcode.com/problems/majority-element/
 *
 * Category: Arrays
 * Pattern: Boyer–Moore Voting Algorithm
 * Difficulty: Easy
 *
 * Key Insight:
 * - The majority element appears more than ⌊n / 2⌋ times.
 * - By canceling out different elements, the majority
 *   element always survives as the final candidate.
 *
 * Approach:
 * 1. Initialize:
 *    - candidate = 0
 *    - count = 0
 * 2. Traverse the array:
 *    - If count == 0 → update candidate
 *    - If current element == candidate → increment count
 *    - Else → decrement count
 * 3. Return candidate
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Edge Cases:
 * - Single element array
 * - All elements identical
 * - Majority element at the end
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) candidate = num;

    if (num === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
};

/**
 * Revision Notes:
 * - Optimal solution with constant space
 * - Relies on the guarantee that a majority element exists
 * - Commonly tested algorithm in interviews
 */
