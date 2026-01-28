/**
 * -------------------------------------------------------
 * Problem: Search a 2D Matrix
 * Link: https://leetcode.com/problems/search-a-2d-matrix/
 *
 * Category: Arrays, Binary Search
 * Pattern: Binary Search on Flattened Array
 * Difficulty: Medium
 *
 * Key Insight:
 * - The matrix is sorted in a way that allows it to be
 *   treated as a single sorted 1D array.
 * - We can apply binary search by mapping a 1D index
 *   back to 2D coordinates.
 *
 * Index Mapping:
 * - row = Math.floor(mid / number_of_columns)
 * - col = mid % number_of_columns
 *
 * Approach:
 * 1. Treat the matrix as a 1D array of size (rows * cols)
 * 2. Apply binary search on index range [0, rows*cols - 1]
 * 3. Convert mid index to (row, col)
 * 4. Compare matrix[row][col] with target
 *
 * Time Complexity: O(log(m * n))
 * - Binary search over all elements
 *
 * Space Complexity: O(1)
 * - Constant extra space
 *
 * Edge Cases:
 * - Empty matrix
 * - Single row or single column
 * - Target smaller than first element
 * - Target larger than last element
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Map 1D index to 2D coordinates
    const r = Math.floor(mid / cols);
    const c = mid % cols;

    if (matrix[r][c] === target) {
      return true;
    } else if (matrix[r][c] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

/**
 * Revision Notes:
 * - Very common matrix + binary search pattern
 * - Flattening avoids row-wise binary search
 * - Clean O(log(m*n)) solution
 * - Mapping logic is key to remember
 */
