/**
 * -------------------------------------------------------
 * Problem: Single Number
 * Link: https://leetcode.com/problems/single-number/
 *
 * Category: Arrays
 * Pattern: Bit Manipulation (XOR)
 * Difficulty: Easy
 *
 * Key Insight:
 * - XOR of a number with itself is 0.
 * - XOR of a number with 0 is the number itself.
 * - Since every element appears twice except one,
 *   XOR-ing all elements leaves the unique number.
 *
 * Approach:
 * 1. Initialize result = 0
 * 2. XOR each number with result
 * 3. Return result
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Edge Cases:
 * - Array with one element
 * - Negative numbers
 * - Large input size
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;

  for (let num of nums) {
    res = res ^ num;
  }

  return res;
};

/**
 * Revision Notes:
 * - Extremely space-efficient solution
 * - Hash map solution also works but uses extra space
 * - XOR-based problems are common in interviews
 */
