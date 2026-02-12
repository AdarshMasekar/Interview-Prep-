/**
 * -------------------------------------------------------
 * Problem: Next Greater Element I
 * Link: https://neetcode.io/problems/next-greater-element-i
 *
 * Category: Stack / Array
 * Pattern: Brute Force (Nested Traversal)
 * Difficulty: Easy
 *
 * Key Insight:
 * - For each element in nums1, we must find its position in nums2
 *   and then search to the right for the first greater element.
 * - If no greater element exists → return -1.
 *
 * Approach:
 * 1. Iterate through each number in nums1.
 * 2. For each number:
 *    - Traverse nums2 until the number is found.
 *    - Start checking elements to the right.
 *    - If a greater element is found → store it.
 *    - Otherwise, keep -1.
 * 3. Push result into answer array.
 *
 * Time Complexity: O(n * m)
 * - n = length of nums1
 * - m = length of nums2
 *
 * Space Complexity: O(1)
 * - Ignoring output array.
 *
 * Edge Cases:
 * - No greater element exists
 * - nums1 contains one element
 * - nums2 strictly decreasing
 *
 * -------------------------------------------------------
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ans = [];

    for (let num of nums1) {
        let startComparing = false;
        let current = num;
        let greaterNum = -1;

        for (let numb of nums2) {
            if (startComparing && numb > current) {
                greaterNum = numb;
                break;
            }

            if (current == numb) {
                startComparing = true;
            }
        }

        ans.push(greaterNum);
    }

    return ans;
};

/**
 * Revision Notes:
 * - This is a brute-force solution.
 * - Easy to understand but not optimal.
 * - Optimal approach uses a monotonic decreasing stack
 *   with a hash map for O(n + m) time.
 */
