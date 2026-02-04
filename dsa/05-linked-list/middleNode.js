/**
 * -------------------------------------------------------
 * Problem: Middle of the Linked List
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * Category: Linked List
 * Pattern: Two Pointers (Slow & Fast)
 * Difficulty: Easy
 *
 * Key Insight:
 * - Using two pointers moving at different speeds:
 *   • Slow pointer moves 1 step at a time
 *   • Fast pointer moves 2 steps at a time
 * - When the fast pointer reaches the end,
 *   the slow pointer will be at the middle.
 *
 * Note:
 * - If there are two middle nodes (even length),
 *   the second middle node is returned.
 *
 * Approach:
 * 1. Initialize two pointers: slow and fast at head
 * 2. Move slow by 1 step and fast by 2 steps
 * 3. Continue until fast reaches the end
 * 4. Return slow
 *
 * Time Complexity: O(n)
 * - Single traversal of the linked list
 *
 * Space Complexity: O(1)
 * - Constant extra space
 *
 * Edge Cases:
 * - Single node list
 * - Two node list
 * - Even and odd length lists
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
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

/**
 * Revision Notes:
 * - Classic slow & fast pointer technique
 * - No need to count list length
 * - Frequently asked linked list interview problem
 * - Pattern reused in cycle detection and palindrome checks
 */
