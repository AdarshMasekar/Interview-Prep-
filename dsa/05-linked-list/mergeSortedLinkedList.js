/**
 * -------------------------------------------------------
 * Problem: Merge Two Sorted Lists
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Category: Linked List
 * Pattern: Two Pointers / Merge Technique
 * Difficulty: Easy
 *
 * Key Insight:
 * - Both linked lists are already sorted.
 * - We can merge them similarly to the merge step in merge sort.
 * - No extra nodes are required; reuse existing nodes.
 *
 * Approach:
 * 1. Handle edge cases where one list is null.
 * 2. Choose the smaller head node to start the merged list.
 * 3. Use a pointer `curr` to build the merged list.
 * 4. Repeatedly attach the smaller node from `list1` or `list2`.
 * 5. When one list ends, attach the remaining nodes of the other list.
 *
 * Time Complexity: O(n + m)
 * - n = length of list1, m = length of list2
 *
 * Space Complexity: O(1)
 * - In-place merge, no extra memory used
 *
 * Edge Cases:
 * - One or both lists are empty
 * - Lists of different lengths
 * - Lists with duplicate values
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let head;

  if (list1.val <= list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  let curr = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  // Attach remaining nodes
  curr.next = list1 !== null ? list1 : list2;

  return head;
};

/**
 * Revision Notes:
 * - Classic two-pointer linked list problem
 * - Identical idea to merging arrays
 * - Very common interview favorite
 * - Recursive solution is also worth knowing
 */
