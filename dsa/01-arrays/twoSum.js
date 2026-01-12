/**
 * -------------------------------------------------------
 * Problem: Two Sum
 * Link: https://neetcode.io/problems/two-integer-sum/question?list=neetcode150
 *
 * Category: Arrays
 * Pattern: Hash Map / Complement Lookup
 * Difficulty: Easy
 *
 * Key Insight:
 * - For each number, check if the complement (target - num)
 *   has already been seen.
 * - Use a hash map to store numbers and their indices for O(1) lookup.
 *
 * Approach:
 * 1. Initialize an empty Map
 * 2. Traverse the array
 *    - Compute complement = target - current number
 *    - If complement exists in Map → return [index of complement, current index]
 *    - Else, store current number with its index in Map
 * 3. If no pair found → return empty array
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - No valid pair → return []
 * - Array with exactly two numbers → works normally
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }

    return [];
  }
}

/**
 * Revision Notes:
 * - Early return avoids unnecessary iterations
 * - Hash map ensures single-pass solution
 * - Can be adapted for multiple pairs by storing arrays of indices
 */
