/**
 * -------------------------------------------------------
 * Problem: Summary Ranges
 * Link: https://leetcode.com/problems/summary-ranges/
 *
 * Category: Arrays
 * Pattern: Two Pointers / Interval Tracking
 * Difficulty: Easy
 *
 * Key Insight:
 * - The array is sorted and contains unique integers.
 * - Consecutive numbers (difference = 1) belong to the same range.
 * - A range is finalized when the sequence breaks.
 *
 * Approach:
 * 1. Initialize:
 *    - start = 0 (start index of range)
 *    - end = 0 (end index of range)
 * 2. Traverse the array:
 *    - If nums[i + 1] is consecutive → extend the range
 *    - Otherwise → close the current range:
 *        - If start < end → push "start->end"
 *        - Else → push single number
 * 3. Update start and end for the next range
 * 4. Return result array
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (excluding output array)
 *
 * Edge Cases:
 * - Empty array
 * - Single element array
 * - All elements consecutive
 * - No consecutive elements
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const res = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      end++;
    } else {
      if (start < end) {
        res.push(nums[start] + "->" + nums[end]);
      } else {
        res.push(nums[start].toString());
      }
      start = i + 1;
      end = i + 1;
    }
  }

  return res;
};

/**
 * Revision Notes:
 * - Uses index-based tracking instead of value comparison
 * - Clean handling of both ranges and single elements
 * - Common array interval problem asked in interviews
 */
