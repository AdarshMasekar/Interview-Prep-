/**
 * -------------------------------------------------------
 * Problem: Contains Duplicate II
 * Link: https://leetcode.com/problems/contains-duplicate-ii/
 *
 * Category: Arrays / Hashing
 * Pattern: Hash Map + Index Tracking
 * Difficulty: Easy
 *
 * Key Insight:
 * - We need to check if the same number appears again
 *   such that the difference between indices ≤ k.
 * - A HashMap allows O(1) lookup of the last seen index.
 *
 * Approach:
 * 1. Initialize an empty Map to store:
 *    - key   → number
 *    - value → last seen index
 * 2. Traverse the array:
 *    - If the number already exists in the map:
 *        - Check if current index - previous index ≤ k
 *        - If yes → return true
 *    - Update the index of the number in the map
 * 3. If no valid pair found → return false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - Empty array
 * - k = 0
 * - All unique elements
 * - Duplicate elements far apart
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const prevIndex = map.get(nums[i]);
      if (Math.abs(i - prevIndex) <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }

  return false;
};

/**
 * Revision Notes:
 * - HashMap stores only the most recent index
 * - Early return improves performance
 * - Common sliding window / hashing interview problem
 */
