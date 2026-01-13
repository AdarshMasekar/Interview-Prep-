/**
 * -------------------------------------------------------
 * Problem: Find Resultant Array After Removing Anagrams
 * Link: https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/
 *
 * Category: Strings / Arrays
 * Pattern: Hash Map + Frequency Count
 * Difficulty: Easy
 *
 * Key Insight:
 * - Only **consecutive anagrams** need to be removed.
 * - By converting each word into a character frequency key,
 *   we can easily compare it with the previous word.
 * - If two consecutive words share the same key, the latter
 *   is an anagram and should be skipped.
 *
 * Approach:
 * 1. Maintain a variable to store the previous word’s key
 * 2. Iterate through the words array
 * 3. For each word:
 *    - Build a frequency array of size 26
 *    - Convert it into a string key
 *    - Compare it with the previous key
 * 4. Add the word to the result only if the key differs
 *
 * Time Complexity:
 * - O(n * k)
 *   where n = number of words, k = max length of a word
 *
 * Space Complexity:
 * - O(k) for frequency array (constant 26)
 *
 * Edge Cases:
 * - Single word → returned as-is
 * - All words are anagrams → only the first is kept
 * - No anagrams → original array is returned
 *
 * -------------------------------------------------------
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let previousKey = "";
  const finalArray = [];

  for (const str of words) {
    const count = Array(26).fill(0);

    for (const ch of str) {
      count[ch.charCodeAt(0) - 97]++;
    }

    const currentKey = count.join("#");

    if (currentKey !== previousKey) {
      finalArray.push(str);
      previousKey = currentKey;
    }
  }

  return finalArray;
};

/**
 * Revision Notes:
 * - Sorting-based solution also works but is slower (O(k log k))
 * - Frequency key ensures linear processing per word
 * - Tracking only the previous key avoids extra space usage
 */
