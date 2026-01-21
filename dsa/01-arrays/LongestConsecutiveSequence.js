/**
 * -------------------------------------------------------
 * Problem: Longest Consecutive Sequence
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Category: Arrays
 * Pattern: Hash Set
 * Difficulty: Medium
 *
 * Key Insight:
 * - Consecutive sequences only need to be counted starting
 *   from the beginning of a sequence.
 * - A number is the start of a sequence if (num - 1) does not exist.
 * - Using a Set allows O(1) lookups.
 *
 * Approach:
 * 1. Insert all numbers into a Set
 * 2. Iterate through each number in the Set
 * 3. If (num - 1) is not present:
 *    - Start counting the consecutive sequence
 *    - Expand forward while (num + 1) exists
 * 4. Track the maximum sequence length
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - Empty array → 0
 * - Array with duplicates
 * - Array with negative numbers
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
      // Start counting only if num is the beginning of a sequence
      if (!set.has(num - 1)) {
        let current = num;
        let length = 1;

        while (set.has(current + 1)) {
          current++;
          length++;
        }

        longest = Math.max(longest, length);
      }
    }

    return longest;
  }
}

/**
 * Revision Notes:
 * - Avoids sorting, achieving true O(n) time
 * - Prevents redundant counting by checking sequence start
 * - Very common hash set interview problem
 */
