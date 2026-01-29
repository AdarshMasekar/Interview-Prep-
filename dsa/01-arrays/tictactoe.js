/**
 * -------------------------------------------------------
 * Problem: Find Winner on a Tic Tac Toe Game
 * Link: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
 *
 * Category: Arrays, Simulation
 * Pattern: Counting / Game State Tracking
 * Difficulty: Medium
 *
 * Key Insight:
 * - Instead of storing the full board, we track row, column,
 *   diagonal, and anti-diagonal counts.
 * - Player A contributes +1, Player B contributes -1.
 * - If any count reaches ±3, that player wins.
 *
 * Approach:
 * 1. Initialize:
 *    - rows[3], cols[3] = 0
 *    - diag = 0, anti = 0
 * 2. Iterate through moves:
 *    - Determine player (+1 or -1)
 *    - Update row, column, and diagonals
 *    - Check for winning condition
 * 3. If no winner:
 *    - 9 moves → "Draw"
 *    - Otherwise → "Pending"
 *
 * Time Complexity: O(n)
 * - Single pass through moves
 *
 * Space Complexity: O(1)
 * - Constant extra space
 *
 * Edge Cases:
 * - Early win before all moves
 * - Full board with no winner
 * - Moves ending on diagonals
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const rows = [0, 0, 0];
  const cols = [0, 0, 0];
  let diag = 0;
  let anti = 0;

  for (let i = 0; i < moves.length; i++) {
    const [r, c] = moves[i];
    const player = i % 2 === 0 ? 1 : -1; // A = +1, B = -1

    rows[r] += player;
    cols[c] += player;

    if (r === c) diag += player;
    if (r + c === 2) anti += player;

    if (
      Math.abs(rows[r]) === 3 ||
      Math.abs(cols[c]) === 3 ||
      Math.abs(diag) === 3 ||
      Math.abs(anti) === 3
    ) {
      return player === 1 ? "A" : "B";
    }
  }

  return moves.length === 9 ? "Draw" : "Pending";
};

/**
 * Revision Notes:
 * - Avoids building a 3×3 board
 * - Elegant constant-space solution
 * - Counting trick simplifies win detection
 * - Frequently asked simulation problem
 */
