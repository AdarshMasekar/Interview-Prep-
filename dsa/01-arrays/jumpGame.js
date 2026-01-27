/**
 * -------------------------------------------------------
 * Problem: Jump Game
 * Link: https://leetcode.com/problems/jump-game/
 *
 * Category: Arrays
 * Pattern: Greedy
 * Difficulty: Medium
 *
 * Key Insight:
 * - At any index, we only care about the farthest position
 *   we can reach so far.
 * - If at any point the current index exceeds the maximum
 *   reachable index, the end is unreachable.
 *
 * Approach:
 * 1. Initialize `reachable = 0` (farthest index reachable).
 * 2. Traverse the array:
 *    - If current index > reachable → return false
 *    - Update reachable = max(reachable, i + nums[i])
 *    - If reachable >= last index → return true
 * 3. If loop completes, return true.
 *
 * Time Complexity: O(n)
 * - Single pass through the array
 *
 * Space Complexity: O(1)
 * - Constant extra space
 *
 * Edge Cases:
 * - Single element array
 * - Zero at the first index
 * - Large jumps early in the array
 * - Unreachable gaps in between
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reachable = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) {
      return false;
    }

    reachable = Math.max(reachable, i + nums[i]);

    if (reachable >= nums.length - 1) {
      return true;
    }
  }

  return true;
};

/**
 * Revision Notes:
 * - Classic greedy problem
 * - No need to try all jump paths
 * - Always track the farthest reachable index
 * - Very common interview question
 */
