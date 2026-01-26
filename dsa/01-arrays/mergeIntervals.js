/**
 * -------------------------------------------------------
 * Problem: Merge Intervals
 * Link: https://leetcode.com/problems/merge-intervals/
 *
 * Category: Arrays
 * Pattern: Sorting + Interval Merging
 * Difficulty: Medium
 *
 * Key Insight:
 * - Overlapping intervals can be merged if the end of the
 *   current interval is greater than or equal to the start
 *   of the next interval.
 * - Sorting by start time ensures overlaps are adjacent.
 *
 * Approach:
 * 1. If there is only one interval, return it.
 * 2. Sort intervals based on start time.
 * 3. Iterate through intervals:
 *    - If current interval overlaps with next:
 *        - Merge them by updating next interval
 *    - Else:
 *        - Push current interval to result
 * 4. Push the last interval to the result.
 *
 * Time Complexity: O(n log n)
 * - Sorting dominates
 *
 * Space Complexity: O(n)
 * - Result array
 *
 * Edge Cases:
 * - Single interval
 * - Fully overlapping intervals
 * - No overlapping intervals
 * - Intervals already sorted
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  const ans = [];

  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    // Overlapping intervals
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i + 1][0] = intervals[i][0];

      if (intervals[i][1] > intervals[i + 1][1]) {
        intervals[i + 1][1] = intervals[i][1];
      }
    } else {
      ans.push(intervals[i]);
    }
  }

  // Push the last merged interval
  ans.push(intervals[intervals.length - 1]);

  return ans;
};

/**
 * Revision Notes:
 * - Sorting is mandatory to simplify overlap detection
 * - Can also be solved using a single current interval variable
 * - Commonly asked interval problem in interviews
 */
