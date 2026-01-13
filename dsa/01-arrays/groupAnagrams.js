/**
 * -------------------------------------------------------
 * Problem: Group Anagrams
 * Link: https://neetcode.io/problems/anagram-groups/question
 *
 * Category: Strings / Arrays
 * Pattern: Hash Map + Frequency Count
 * Difficulty: Medium
 *
 * Key Insight:
 * - Anagrams have identical character frequencies.
 * - Instead of sorting (O(k log k)), we can represent each
 *   string by a fixed-size frequency array of 26 letters.
 * - This frequency array can be converted into a unique key.
 *
 * Approach:
 * 1. Initialize an empty Map
 * 2. For each string:
 *    - Create a frequency array of size 26
 *    - Count occurrences of each character
 *    - Convert the frequency array into a string key
 * 3. Use the key to group original strings in the Map
 * 4. Return all grouped values
 *
 * Time Complexity:
 * - O(n * k)
 *   where n = number of strings, k = max length of a string
 *
 * Space Complexity:
 * - O(n * k) for storing grouped strings and keys
 *
 * Edge Cases:
 * - Empty input array → []
 * - Single string → [[string]]
 * - Multiple identical strings
 *
 * -------------------------------------------------------
 */

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
      const freqArray = Array(26).fill(0);

      for (const ch of str) {
        freqArray[ch.charCodeAt(0) - 97]++;
      }

      // Use delimiter to avoid key collision
      const key = freqArray.join("#");

      if (!map.has(key)) {
        map.set(key, []);
      }

      map.get(key).push(str);
    }

    return [...map.values()];
  }
}

/**
 * Revision Notes:
 * - More optimal than sorting-based approach
 * - Fixed-size frequency array guarantees consistent keys
 * - Delimiter (#) avoids ambiguity in key generation
 */



// ---


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
