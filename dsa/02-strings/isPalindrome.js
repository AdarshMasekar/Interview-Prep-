/**
 * -------------------------------------------------------
 * Problem: Valid Palindrome
 * Link: https://leetcode.com/problems/valid-palindrome/
 *
 * Category: Strings
 * Pattern: Two Pointers
 * Difficulty: Easy
 *
 * Key Insight:
 * - A palindrome reads the same forward and backward.
 * - By ignoring non-alphanumeric characters and case,
 *   we can reduce the problem to a simple two-pointer check.
 *
 * Approach:
 * 1. Convert the string to lowercase
 * 2. Remove all non-alphanumeric characters
 * 3. Use two pointers (start and end)
 * 4. Compare characters while moving pointers inward
 * 5. If all match → return true
 *
 * Time Complexity:
 * - O(n), where n is the length of the string
 *
 * Space Complexity:
 * - O(n), due to creating a sanitized string
 *
 * Edge Cases:
 * - Empty string → true
 * - String with only non-alphanumeric characters → true
 * - Mixed casing and symbols
 *
 * -------------------------------------------------------
 */

// Solution with O(1) space
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while(start < end){
            if(s[start].toLocaleLowerCase() == s[end].toLocaleLowerCase()){
                start++;
                end--;
            }else if(start < end && !this.isValidChar(s[start])){
                start++;
            }else if(start < end && !this.isValidChar(s[end])){
                end--;
            }else{
                return false;
            }
        }
        return true;
    }

    isValidChar(char){
        return (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char >= '0' && char <='9');
    }
}


class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let sanitiedString = s
      .toLocaleLowerCase()
      .replace(/[^a-z0-9]/g, "");

    let start = 0;
    let end = sanitiedString.length - 1;

    while (start < end) {
      if (sanitiedString[start] !== sanitiedString[end]) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }
}

/**
 * Revision Notes:
 * - Can be optimized to O(1) space using two pointers
 *   directly on the original string
 * - Regex-based sanitization keeps logic simple and readable
 * - Commonly asked in interviews to test string handling
 */
