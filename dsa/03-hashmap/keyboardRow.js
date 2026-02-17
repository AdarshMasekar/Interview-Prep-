/**
 * -------------------------------------------------------
 * Problem: Keyboard Row
 * Link: https://neetcode.io/problems/keyboard-row
 *
 * Category: String
 * Pattern: Hash Set
 * Difficulty: Easy
 *
 * Key Insight:
 * - Each letter belongs to one of three keyboard rows.
 * - If all characters of a word belong to the same row,
 *   the word is valid.
 * - Using Sets allows O(1) membership checking.
 *
 * Approach:
 * 1. Create three Sets representing keyboard rows.
 * 2. Iterate through each word:
 *    - Convert word to lowercase.
 *    - Determine which row the first character belongs to.
 *    - Check if all characters exist in that row.
 * 3. If valid, add the original word to result.
 *
 * Time Complexity: O(n * k)
 * - n = number of words
 * - k = average word length
 *
 * Space Complexity: O(1)
 * - Only fixed sets for keyboard rows.
 *
 * Edge Cases:
 * - Single character word
 * - Uppercase letters
 * - Words with mixed row letters
 *
 * -------------------------------------------------------
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    const result = [];

    for (let word of words) {
        const lowerWord = word.toLowerCase();

        // Determine row using first character
        let row;
        if (row1.has(lowerWord[0])) {
            row = row1;
        } else if (row2.has(lowerWord[0])) {
            row = row2;
        } else {
            row = row3;
        }

        // Validate all characters belong to same row
        let isValid = true;
        for (let char of lowerWord) {
            if (!row.has(char)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            result.push(word);
        }
    }

    return result;
};

/**
 * Revision Notes:
 * - Using Set makes membership checking O(1).
 * - Lowercasing avoids case-handling complexity.
 * - Could optimize slightly by using a character → row map.
 */
