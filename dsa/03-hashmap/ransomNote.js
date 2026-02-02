/**
 * -------------------------------------------------------
 * Problem: Ransom Note
 * Link: https://leetcode.com/problems/ransom-note/
 *
 * Category: Strings, Hash Map
 * Pattern: Frequency Counting
 * Difficulty: Easy
 *
 * Key Insight:
 * - Each character in the ransom note must be available
 *   in the magazine with sufficient frequency.
 * - A hash map allows efficient counting and lookup.
 *
 * Approach:
 * 1. Count the frequency of each character in `magazine`
 * 2. Traverse `ransomNote`:
 *    - If a character is missing → return false
 *    - Otherwise decrement its count
 * 3. If all characters are satisfied → return true
 *
 * Time Complexity: O(n + m)
 * - n = length of ransomNote
 * - m = length of magazine
 *
 * Space Complexity: O(1)
 * - At most 26 lowercase English letters
 *
 * Edge Cases:
 * - ransomNote longer than magazine
 * - Repeated characters
 * - Empty ransomNote → true
 *
 * -------------------------------------------------------
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of ransomNote) {
    if (!map.get(char)) {
      return false;
    } else {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) {
        map.delete(char);
      }
    }
  }

  return true;
};

/**
 * Revision Notes:
 * - Simple frequency map problem
 * - Can also be solved using fixed-size array (26)
 * - Early exit improves performance
 * - One of the most common string hashmap questions
 */
