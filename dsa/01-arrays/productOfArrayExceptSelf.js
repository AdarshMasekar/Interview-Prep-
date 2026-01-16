/**
 * -------------------------------------------------------
 * Problem: Product of Array Except Self
 * Link: https://neetcode.io/problems/products-of-array-discluding-self
 *
 * Category: Arrays
 * Pattern: Brute Force
 * Difficulty: Medium
 *
 * Key Insight:
 * - For each index, compute the product of all elements
 *   except the element at that index.
 * - This solution directly multiplies all other elements
 *   using a nested loop.
 *
 * Approach:
 * 1. Initialize an empty result array
 * 2. For each index `i`:
 *    - Initialize product = 1
 *    - Traverse the array again
 *    - Skip index `i`
 *    - Multiply all other elements
 * 3. Store product in result[i]
 *
 * Time Complexity:
 * - O(n²) due to nested loops
 *
 * Space Complexity:
 * - O(1) extra space (excluding output array)
 *
 * Edge Cases:
 * - Array with one element
 * - Array containing zeros
 * - Negative numbers
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      let product = 1;

      for (let j = 0; j < nums.length; j++) {
        if (i === j) continue;
        product *= nums[j];
      }

      result[i] = product;
    }

    return result;
  }
}

/**
 * Revision Notes:
 * - Simple and intuitive solution for beginners
 * - Does not meet optimal constraints required by the problem
 * - Can be optimized to O(n) using prefix & suffix products
 */
