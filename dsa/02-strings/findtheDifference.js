/**
 * -------------------------------------------------------
 * Problem: Find the Difference
 * Link: https://leetcode.com/problems/find-the-difference/
 *
 * Category: Strings / Hashing
 * Pattern: Frequency Map
 * Difficulty: Easy
 *
 * Key Insight:
 * - String `t` contains all characters of `s` plus one extra.
 * - By tracking character frequencies, the extra character
 *   can be identified when counts mismatch.
 *
 * Approach:
 * 1. Create a HashMap to store character frequencies of `s`.
 * 2. Traverse string `s`:
 *    - Increment frequency for each character.
 * 3. Traverse string `t`:
 *    - If character exists in map → decrement count
 *    - If count becomes 0 → remove from map
 *    - If character does NOT exist → this is the extra character
 * 4. Return the extra character.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * - At most 26 lowercase letters.
 *
 * Edge Cases:
 * - Single character strings
 * - Repeated characters
 * - Extra character at the beginning or end
 *
 * -------------------------------------------------------
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) {
        map.delete(char);
      }
    } else {
      return char;
    }
  }

  return '';
};

/**
 * Revision Notes:
 * - Hashing based frequency comparison
 * - Simple and intuitive solution
 * - XOR solution also exists with O(1) space
 */
