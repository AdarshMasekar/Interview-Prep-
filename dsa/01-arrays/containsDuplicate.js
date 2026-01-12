/**
 * -------------------------------------------------------
 * Problem: Contains Duplicate
 * Link: https://neetcode.io/problems/duplicate-integer
 *
 * Category: Arrays
 * Pattern: Hash Map
 * Difficulty: Easy
 *
 * Key Insight:
 * - If an element appears more than once, we can detect it
 *   while traversing using a hash map / set.
 *
 * Approach:
 * 1. Create a Map (or Set)
 * 2. Traverse the array
 * 3. If element already exists → return true
 * 4. Else store it and continue
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - Empty array → false
 * - Single element → false
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Set();

    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }

    return false;
  }
}

/**
 * Revision Notes:
 * - Can be optimized using Set instead of Map
 * - Early return avoids unnecessary iterations
 */
