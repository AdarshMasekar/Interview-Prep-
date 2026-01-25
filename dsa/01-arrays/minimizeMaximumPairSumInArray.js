/**
 * -------------------------------------------------------
 * Problem: Minimize Maximum Pair Sum in Array
 * Link: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 *
 * Category: Arrays
 * Pattern: Two Pointers + Sorting
 * Difficulty: Medium
 *
 * Key Insight:
 * - To minimize the maximum pair sum, pair the smallest
 *   element with the largest element.
 * - Sorting allows optimal pairing using two pointers.
 *
 * Approach:
 * 1. Sort the array in ascending order.
 * 2. Initialize two pointers:
 *    - start at beginning
 *    - end at end
 * 3. Pair elements at start and end:
 *    - Compute pair sum
 *    - Track the maximum pair sum
 * 4. Move pointers inward until all pairs are processed.
 *
 * Time Complexity: O(n log n)
 * - Due to sorting
 *
 * Space Complexity: O(1)
 * - Ignoring sorting space
 *
 * Edge Cases:
 * - Minimum array size (2 elements)
 * - All elements equal
 * - Large values causing large sums
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let max = 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    max = Math.max(max, nums[start] + nums[end]);
    start++;
    end--;
  }

  return max;
};

/**
 * Revision Notes:
 * - Classic greedy + two pointer problem
 * - Sorting enables optimal pairing
 * - Frequently asked in array pairing questions
 */
