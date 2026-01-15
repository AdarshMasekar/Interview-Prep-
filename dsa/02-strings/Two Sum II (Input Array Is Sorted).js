/**
 * -------------------------------------------------------
 * Problem: Two Sum II - Input Array Is Sorted
 * Link: https://neetcode.io/problems/two-integer-sum-ii/question
 *
 * Category: Arrays
 * Pattern: Two Pointers
 * Difficulty: Medium
 *
 * Key Insight:
 * - The array is already sorted in non-decreasing order.
 * - Using two pointers allows us to find the target sum
 *   in a single pass without extra space.
 *
 * Approach:
 * 1. Initialize two pointers:
 *    - start at the beginning
 *    - end at the end of the array
 * 2. While start < end:
 *    - If numbers[start] + numbers[end] == target → return indices
 *    - If sum < target → move start forward
 *    - If sum > target → move end backward
 * 3. Return empty array if no solution exists
 *
 * Note:
 * - Indices are 1-based as per problem statement
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Edge Cases:
 * - Only one valid solution exists
 * - Negative numbers in the array
 * - Minimal array size (2 elements)
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
      const sum = numbers[start] + numbers[end];

      if (sum === target) {
        // Convert to 1-based index
        return [++start, ++end];
      } else if (sum < target) {
        start++;
      } else {
        end--;
      }
    }

    return [];
  }
}

/**
 * Revision Notes:
 * - Exploits sorted property for optimal solution
 * - More space-efficient than hash map approach
 * - Classic two-pointer interview problem
 */
