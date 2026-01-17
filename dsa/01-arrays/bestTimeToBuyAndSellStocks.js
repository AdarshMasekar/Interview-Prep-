/**
 * -------------------------------------------------------
 * Problem: Best Time to Buy and Sell Stock
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Category: Arrays
 * Pattern: Sliding Window / Two Pointers
 * Difficulty: Easy
 *
 * Key Insight:
 * - To maximize profit, always buy at the lowest price
 *   before the selling day.
 * - Use two pointers to track the best buying and selling days.
 *
 * Approach:
 * 1. Initialize two pointers:
 *    - left → potential buying day
 *    - right → potential selling day
 * 2. Traverse the array:
 *    - If price at right is lower than left → update left
 *    - Compute current profit = prices[right] - prices[left]
 *    - Update maximum profit if higher
 * 3. Return the maximum profit found
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Edge Cases:
 * - Prices always decreasing → profit = 0
 * - Only one price → profit = 0
 * - Large input size
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0, right = 1,profit = 0;

  while (right < prices.length) {
    // Found a lower buying price
    if (prices[left] > prices[right]) {
      left = right;
    }

    const curprofit = prices[right] - prices[left];
    if (curprofit > profit) profit = curprofit;

    right++;
  }

  return profit;
};

/**
 * Revision Notes:
 * - Single pass solution using sliding window technique
 * - More efficient than brute-force O(n²) approach
 * - Very common interview problem for arrays
 */
