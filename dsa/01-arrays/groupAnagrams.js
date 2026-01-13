/**
 * -------------------------------------------------------
 * Problem: Group Anagrams
 * Link: https://neetcode.io/problems/anagram-groups/question
 *
 * Category: Strings / Arrays
 * Pattern: Hash Map + Sorting
 * Difficulty: Medium
 *
 * Key Insight:
 * - Anagrams share the same characters in the same frequency.
 * - Sorting each string gives a canonical representation
 *   that can be used as a hash map key.
 *
 * Approach:
 * 1. For each string, sort its characters
 * 2. Store the sorted string as a key in a Map
 * 3. Push the original string into the corresponding group
 * 4. Return all grouped values from the Map
 *
 * Time Complexity:
 * - O(n * k log k)
 *   where n = number of strings, k = max length of a string
 *
 * Space Complexity:
 * - O(n * k) for storing keys and grouped strings
 *
 * Edge Cases:
 * - Empty input array → []
 * - Single string → [[string]]
 * - Strings with same characters but different order
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const sortedArray = [];

    // Step 1: Create sorted representation for each string
    strs.forEach(str => {
      sortedArray.push(str.split('').sort().join(''));
    });

    const map = new Map();

    // Step 2: Group original strings using sorted key
    for (let i = 0; i < sortedArray.length; i++) {
      if (map.has(sortedArray[i])) {
        map.get(sortedArray[i]).push(strs[i]);
      } else {
        map.set(sortedArray[i], [strs[i]]);
      }
    }

    // Step 3: Return grouped anagrams
    return [...map.values()];
  }
}

/**
 * Revision Notes:
 * - Sorting approach is easy to understand and implement
 * - Can be optimized using frequency count (26-length array)
 *   to avoid sorting
 * - Map values directly represent grouped anagrams
 */
