/**
 * -------------------------------------------------------
 * Problem: Maximum Number of Moves in a Grid
 * Link: https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
 *
 * Category: Dynamic Programming, Matrix
 * Pattern: DP on Grid (Left → Right traversal)
 * Difficulty: Medium
 *
 * Key Insight:
 * - You can start from any cell in the first column.
 * - From a cell (r, c), you can move to:
 *   → (r-1, c+1), (r, c+1), (r+1, c+1)
 *   only if the destination value is strictly greater.
 * - Track the maximum moves possible to reach each cell.
 *
 * Approach:
 * 1. Create a DP matrix where:
 *    - dp[r][c] = maximum moves to reach (r, c)
 *    - -1 represents unreachable cells
 * 2. Initialize the first column with 0 moves.
 * 3. Iterate column by column from left to right:
 *    - For each cell, check all valid previous moves
 *    - Update dp[r][c] if a valid move exists
 * 4. Track the global maximum moves.
 *
 * Time Complexity: O(m * n)
 * - Each cell is processed once
 *
 * Space Complexity: O(m * n)
 * - DP matrix to store intermediate results
 *
 * Edge Cases:
 * - Single column grid → 0 moves
 * - No increasing paths
 * - Multiple valid starting rows
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // dp[r][c] = max moves to reach (r, c), -1 means unreachable
  const dp = Array.from({ length: m }, () => Array(n).fill(-1));

  // Initialize first column
  for (let r = 0; r < m; r++) {
    dp[r][0] = 0;
  }

  let ans = 0;

  for (let c = 1; c < n; c++) {
    for (let r = 0; r < m; r++) {
      let best = -1;

      // top-left
      if (
        r > 0 &&
        dp[r - 1][c - 1] !== -1 &&
        grid[r][c] > grid[r - 1][c - 1]
      ) {
        best = Math.max(best, dp[r - 1][c - 1]);
      }

      // left
      if (
        dp[r][c - 1] !== -1 &&
        grid[r][c] > grid[r][c - 1]
      ) {
        best = Math.max(best, dp[r][c - 1]);
      }

      // bottom-left
      if (
        r < m - 1 &&
        dp[r + 1][c - 1] !== -1 &&
        grid[r][c] > grid[r + 1][c - 1]
      ) {
        best = Math.max(best, dp[r + 1][c - 1]);
      }

      if (best !== -1) {
        dp[r][c] = best + 1;
        ans = Math.max(ans, dp[r][c]);
      }
    }
  }

  return ans;
};

/**
 * Revision Notes:
 * - DP avoids repeated path exploration
 * - Left-to-right traversal ensures valid transitions
 * - Grid DP + bounds checking is the core pattern
 * - Very common LeetCode medium DP problem
 */
