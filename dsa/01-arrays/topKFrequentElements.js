/**
 * -------------------------------------------------------
 * Problem: Top K Frequent Elements
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Category: Arrays
 * Pattern: Hash Map + Sorting
 * Difficulty: Medium
 *
 * Key Insight:
 * - Frequency of elements matters more than their order.
 * - Use a hash map to count occurrences, then sort by frequency.
 *
 * Approach:
 * 1. Traverse the array and count frequency using a Map
 * 2. Convert Map entries into an array
 * 3. Sort the entries in descending order of frequency
 * 4. Extract the first k elements
 *
 * Time Complexity:
 * - O(n log n) due to sorting
 *
 * Space Complexity:
 * - O(n) for the frequency map and entries array
 *
 * Edge Cases:
 * - k = 1
 * - All elements have same frequency
 * - nums contains negative numbers
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let map = new Map();

    // Step 1: Count frequencies
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    // Step 2: Sort by frequency
    let entries = [...map.entries()];
    entries.sort((a, b) => b[1] - a[1]);

    // Step 3: Collect top k elements
    let result = [];
    for (let i = 0; i < k; i++) {
      result[i] = entries[i][0];
    }

    return result;
  }
}

/**
 * Revision Notes:
 * - Easy-to-understand approach using sorting
 * - Optimal solution uses Bucket Sort or Heap for O(n)
 * - Sorting-based solution is acceptable for most cases
 */
