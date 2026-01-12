/**
 * -------------------------------------------------------
 * Problem: Valid Anagram
 * Link: https://neetcode.io/problems/is-anagram/question?list=neetcode150
 *
 * Category: Strings
 * Pattern: Hash Map / Frequency Counter
 * Difficulty: Easy
 *
 * Key Insight:
 * - Two strings are anagrams if they have the same character
 *   counts for each character.
 * - Use a hash map to count frequencies in the first string
 *   and decrement counts while checking the second string.
 *
 * Approach:
 * 1. If lengths differ → return false
 * 2. Traverse string `s` and count frequencies using a Map
 * 3. Traverse string `t`
 *    - If char not in Map → return false
 *    - Decrement count; remove from Map if count reaches 0
 * 4. After traversal, Map should be empty → return true
 *
 * Time Complexity: O(n) where n = length of string
 * Space Complexity: O(n) for the Map
 *
 * Edge Cases:
 * - Strings of different lengths → false
 * - Empty strings → true
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = new Map();

    for (const char of s) {
      count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of t) {
      if (!count.has(char)) return false;
      count.set(char, count.get(char) - 1);
      if (count.get(char) === 0) count.delete(char);
    }

    return count.size === 0;
  }
}

/**
 * Revision Notes:
 * - Can also optimize using a fixed-size array of 26 for lowercase letters
 * - Early return when lengths differ avoids unnecessary work
 * - Map deletion ensures accurate count tracking
 */
