/**
 * -------------------------------------------------------
 * Problem: Find Valid Emails
 * Link: https://leetcode.com/problems/find-valid-emails/
 *
 * Category: SQL, String Matching
 * Pattern: Regular Expressions (REGEXP)
 * Difficulty: Easy
 *
 * Key Insight:
 * - A valid email must strictly follow the format:
 *     name@domain.com
 * - Constraints:
 *   • name   → letters, digits, underscore (_)
 *   • domain → only letters
 *   • must end with ".com"
 *
 * Regex Breakdown:
 * - ^                 → start of string
 * - [0-9A-Za-z_]+     → valid username characters
 * - @                 → literal '@'
 * - [A-Za-z]+         → domain name
 * - \\.com            → ends with ".com"
 * - $                 → end of string
 *
 * Approach:
 * 1. Use REGEXP to validate email format
 * 2. Filter only valid emails
 * 3. Sort result by user_id
 *
 * Time Complexity: O(n)
 * - Regex check per row
 *
 * Space Complexity: O(1)
 * - No extra storage used
 *
 * Edge Cases:
 * - Missing '@' symbol
 * - Invalid domain format
 * - Uppercase / lowercase handling
 * - Extra characters before or after ".com"
 *
 * -------------------------------------------------------
 */

SELECT
    user_id,
    email
FROM Users
WHERE email REGEXP '^[0-9A-Za-z_]+@[A-Za-z]+\\.com$'
ORDER BY user_id;

/**
 * Revision Notes:
 * - REGEXP is supported in MySQL
 * - Escape '.' using '\\.' inside regex
 * - Anchors (^, $) are crucial for strict matching
 * - Common SQL string validation problem
 */
