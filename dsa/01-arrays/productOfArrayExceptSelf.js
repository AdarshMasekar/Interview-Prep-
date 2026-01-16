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
/**
 * -------------------------------------------------------
 * Problem: Product of Array Except Self
 * Link: https://neetcode.io/problems/products-of-array-discluding-self
 *
 * Category: Arrays
 * Pattern: Prefix & Suffix Products
 * Difficulty: Medium
 *
 * Key Insight:
 * - The product for an index i is:
 *     product of elements to the left of i
 *     × product of elements to the right of i
 * - Division is not allowed, so we precompute left and right products.
 *
 * Approach:
 * 1. Create two arrays:
 *    - leftProd[i]  → product of elements before index i
 *    - rightProd[i] → product of elements after index i
 * 2. Initialize:
 *    - leftProd[0] = 1
 *    - rightProd[n - 1] = 1
 * 3. Fill leftProd from left to right
 * 4. Fill rightProd from right to left
 * 5. Multiply leftProd[i] * rightProd[i] for each index
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Edge Cases:
 * - Array contains one or more zeros
 * - Negative numbers
 * - Single element array
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let length = nums.length;
  let result = [];
  let leftprod = [];
  let rightprod = [];

  // Base initialization
  if (length > 0) {
    leftprod[0] = 1;
    rightprod[length - 1] = 1;
  }

  // Build left products
  for (let i = 1; i < length; i++) {
    leftprod[i] = leftprod[i - 1] * nums[i - 1];
  }

  // Build right products
  for (let i = length - 2; i >= 0; i--) {
    rightprod[i] = rightprod[i + 1] * nums[i + 1];
  }

  // Final result
  for (let i = 0; i < length; i++) {
    result[i] = leftprod[i] * rightprod[i];
  }

  return result;
};

/**
 * Revision Notes:
 * - Classic prefix–suffix problem
 * - Avoids division and nested loops
 * - Can be optimized to O(1) extra space by reusing result array
 */


// O(n^2) solution
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
