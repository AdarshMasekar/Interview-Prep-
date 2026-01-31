
/**
 * -------------------------------------------------------
 * Problem: Transpose Matrix (In-Place)
 * Link: https://leetcode.com/problems/transpose-matrix/
 *
 * Category: Arrays, Matrix
 * Pattern: In-Place Matrix Manipulation
 * Difficulty: Easy
 *
 * Key Insight:
 * - Transposing a matrix means converting rows into columns.
 * - For a square matrix, this can be done in-place by
 *   swapping elements across the main diagonal.
 * - We only swap elements where j > i to avoid double swaps.
 *
 * Approach:
 * 1. Iterate over rows using index i
 * 2. For each row, iterate columns starting from j = i + 1
 * 3. Swap matrix[i][j] with matrix[j][i]
 * 4. Continue until all upper-diagonal elements are processed
 *
 * Time Complexity: O(n²)
 * - Each element is visited once
 *
 * Space Complexity: O(1)
 * - In-place transformation, no extra space
 *
 * Edge Cases:
 * - 1×1 matrix
 * - Empty matrix
 * - Already symmetric matrix
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[][]} matrix
 * @return {void} Modifies matrix in-place
 */
function transposeMatix(matrix) {
  for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}

/**
 * Revision Notes:
 * - Works only for square matrices
 * - Upper-diagonal swap prevents duplicate operations
 * - Commonly used in matrix rotation problems
 */
