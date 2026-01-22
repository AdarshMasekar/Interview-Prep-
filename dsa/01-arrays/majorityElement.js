/**
 * -------------------------------------------------------
 * Problem: Majority Element
 * Link: https://leetcode.com/problems/majority-element/
 *
 * Category: Arrays
 * Pattern: Hash Map / Frequency Counting
 * Difficulty: Easy
 *
 * Key Insight:
 * - The majority element appears more than ⌊n / 2⌋ times.
 * - Counting frequencies guarantees finding the majority element.
 *
 * Approach:
 * 1. Use a Map to count frequency of each number
 * 2. Traverse the Map and return the element
 *    whose frequency is greater than n / 2
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - Single element array
 * - All elements same
 * - Majority element appears early or late
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  // Step 1: Count frequencies
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Step 2: Find majority element
  for (let key of map.keys()) {
    if (map.get(key) > nums.length / 2) {
      return key;
    }
  }

  return 0;
};

/**
 * Revision Notes:
 * - Simple and intuitive solution
 * - Uses extra space
 * - Can be optimized using Boyer-Moore Voting Algorithm (O(1) space)
 */
