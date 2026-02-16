/**
 * -------------------------------------------------------
 * Problem: Compare Version Numbers
 * Link: https://neetcode.io/problems/compare-version-numbers
 *
 * Category: String
 * Pattern: Parsing + Simulation
 * Difficulty: Medium
 *
 * Key Insight:
 * - Versions are separated by dots.
 * - Compare each numeric segment one by one.
 * - Missing segments are treated as 0.
 * - Leading zeros should not affect comparison.
 *
 * Approach:
 * 1. Split both version strings using ".".
 * 2. Traverse both arrays simultaneously.
 * 3. Convert each segment to integer using parseInt().
 * 4. If one version runs out of segments,
 *    treat its value as 0.
 * 5. Compare segment values:
 *    - Return -1 if version1 < version2
 *    - Return 1 if version1 > version2
 * 6. If all segments equal → return 0.
 *
 * Time Complexity: O(n + m)
 * - n = segments in version1
 * - m = segments in version2
 *
 * Space Complexity: O(n + m)
 * - Arrays created after split()
 *
 * Edge Cases:
 * - Different number of segments
 * - Trailing zeros (e.g., "1.0" vs "1")
 * - Leading zeros (e.g., "1.01" vs "1.001")
 *
 * -------------------------------------------------------
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    let i = 0;
    let j = 0;

    while (i < v1.length || j < v2.length) {
        let valueI = i < v1.length ? parseInt(v1[i], 10) : 0;
        let valueJ = j < v2.length ? parseInt(v2[j], 10) : 0;

        if (valueI < valueJ) return -1;
        if (valueI > valueJ) return 1;

        i++;
        j++;
    }

    return 0;
};

/**
 * Revision Notes:
 * - Always use parseInt(..., 10) to avoid base confusion.
 * - Treat missing segments as 0.
 * - Leading zeros automatically handled by parseInt().
 * - Can optimize space by parsing without split().
 */
