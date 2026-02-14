/*
-------------------------------------------------------
Problem: Percentage of Users Attended a Contest
Link: https://leetcode.com/problems/percentage-of-users-attended-a-contest/

Category: SQL
Pattern: Aggregation + Subquery
Difficulty: Easy

Key Insight:
- We need to calculate the percentage of total users
  who registered for each contest.
- Use COUNT(DISTINCT user_id) per contest.
- Divide by total number of users using a subquery.
- Round the result to 2 decimal places.

Approach:
1. Group records by contest_id.
2. Count distinct users per contest.
3. Divide by total user count (subquery).
4. Multiply by 100 to convert to percentage.
5. Round to 2 decimal places.
6. Order by percentage DESC, contest_id ASC.

Time Complexity:
- O(n log n) due to GROUP BY and ORDER BY
  (n = number of rows in Register table)

Space Complexity:
- Depends on grouping size (per contest aggregation).

Edge Cases:
- Contest with only one participant
- All users registered for a contest
- No duplicate users per contest (DISTINCT ensures correctness)

-------------------------------------------------------
*/

SELECT
    r.contest_id,
    ROUND(
        COUNT(DISTINCT r.user_id) * 100.0 /
        (SELECT COUNT(*) FROM Users),
        2
    ) AS percentage
FROM Register r
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id ASC;

/*
Revision Notes:
- 100.0 ensures floating-point division.
- DISTINCT prevents duplicate registrations affecting count.
- Subquery runs once logically (optimized by SQL engine).
- Common mistake: forgetting ROUND(…, 2).
*/
