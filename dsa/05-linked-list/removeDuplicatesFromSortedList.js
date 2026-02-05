/**
 * -------------------------------------------------------
 * Problem: Remove Duplicates from Sorted List
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * Category: Linked List
 * Pattern: Two Pointers / In-Place Modification
 * Difficulty: Easy
 *
 * Key Insight:
 * - The linked list is already sorted.
 * - Duplicate values will always be adjacent.
 * - We can remove duplicates by adjusting pointers
 *   without using extra space.
 *
 * Approach:
 * 1. If the list is empty, return null.
 * 2. Use a pointer `curr` starting from the head.
 * 3. Compare `curr.val` with `curr.next.val`:
 *    - If equal → skip the next node.
 *    - Otherwise → move `curr` forward.
 * 4. Continue until the end of the list.
 *
 * Time Complexity: O(n)
 * - Each node is visited once.
 *
 * Space Complexity: O(1)
 * - In-place modification, no extra memory.
 *
 * Edge Cases:
 * - Empty list
 * - Single node list
 * - All nodes having the same value
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
var deleteDuplicates = function (head) {
  if (head === null) return head;

  let curr = head;

  while (curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next; // skip duplicate
    } else {
      curr = curr.next;
    }
  }

  return head;
};

/**
 * Revision Notes:
 * - Sorted property makes the solution simple
 * - Pointer manipulation avoids extra space
 * - Very common beginner linked list problem
 * - Different from "Remove Duplicates II" (that removes all duplicates)
 */
