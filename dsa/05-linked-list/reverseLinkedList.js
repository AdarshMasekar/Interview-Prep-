/**
 * -------------------------------------------------------
 * Problem: Reverse Linked List
 * Link: https://leetcode.com/problems/reverse-linked-list/
 *
 * Category: Linked List
 * Pattern: Iterative Pointer Manipulation
 * Difficulty: Easy
 *
 * Key Insight:
 * - Reversing a linked list means changing the direction
 *   of each node’s `next` pointer.
 * - We only need three pointers:
 *   `prev`, `curr`, and `next`.
 *
 * Approach:
 * 1. Initialize:
 *    - prev = null
 *    - curr = head
 * 2. While curr is not null:
 *    - Store next node
 *    - Reverse the current node’s pointer
 *    - Move prev and curr forward
 * 3. Return prev as the new head
 *
 * Time Complexity: O(n)
 * - Each node is visited once
 *
 * Space Complexity: O(1)
 * - In-place reversal, no extra memory
 *
 * Edge Cases:
 * - Empty list
 * - Single node list
 * - Two-node list
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next; // store next node
    curr.next = prev;       // reverse pointer
    prev = curr;            // move prev forward
    curr = next;            // move curr forward
  }

  return prev;
};

/**
 * Revision Notes:
 * - Classic linked list problem
 * - Iterative solution is optimal and simple
 * - Recursive version also exists (but uses stack space)
 * - Must clearly explain pointer updates in interviews
 */
