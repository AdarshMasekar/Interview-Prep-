/**
 * -------------------------------------------------------
 * Problem: Add Two Numbers
 * Link: https://neetcode.io/problems/add-two-numbers
 *
 * Category: Linked List
 * Pattern: Elementary Math / Carry Handling
 * Difficulty: Medium
 *
 * Key Insight:
 * - The numbers are stored in reverse order.
 * - We simulate digit-by-digit addition just like manual math,
 *   carrying over values greater than 9.
 *
 * Approach:
 * 1. Use a dummy head to simplify linked list construction.
 * 2. Maintain a `carry` for values >= 10.
 * 3. Traverse both lists simultaneously:
 *    - Add values from l1, l2, and carry.
 *    - Create a new node with (sum % 10).
 *    - Update carry as Math.floor(sum / 10).
 * 4. Continue until both lists are exhausted AND carry is zero.
 *
 * Time Complexity: O(max(n, m))
 * - Where n and m are the lengths of l1 and l2.
 *
 * Space Complexity: O(max(n, m))
 * - New linked list created to store the result.
 *
 * Edge Cases:
 * - Lists of different lengths
 * - Final carry producing a new node (e.g., 9 + 9)
 * - One or both lists being null
 *
 * -------------------------------------------------------
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Dummy head simplifies result list construction
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  // Traverse both lists while there is data or carry left
  while (l1 !== null || l2 !== null || carry !== 0) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    // Create node with current digit
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move pointers forward
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // Skip dummy head
  return dummy.next;
};

/**
 * Revision Notes:
 * - Dummy node avoids special handling for the head.
 * - Loop condition ensures carry is not ignored.
 * - This is the most optimal and interview-expected solution.
 * - Common follow-up: handle numbers stored in forward order.
 */
