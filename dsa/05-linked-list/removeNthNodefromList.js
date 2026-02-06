/**
 * -------------------------------------------------------
 * Problem: Remove Nth Node From End of List
 * Link: https://neetcode.io/problems/remove-node-from-end-of-linked-list
 *
 * Category: Linked List
 * Pattern: Two Pass Traversal
 * Difficulty: Medium
 *
 * Key Insight:
 * - If we know the total length of the linked list, removing
 *   the Nth node from the end becomes removing the
 *   (length - n)th node from the start.
 *
 * Approach:
 * 1. Traverse the linked list to calculate its total length.
 * 2. Compute the position to remove from the start:
 *    position = length - n
 * 3. If position == 0, remove the head node.
 * 4. Otherwise, traverse again to the node just before
 *    the target and adjust pointers to remove it.
 *
 * Time Complexity: O(n)
 * - One pass to count nodes
 * - One pass to remove the node
 *
 * Space Complexity: O(1)
 * - No extra data structures used
 *
 * Edge Cases:
 * - Removing the head node
 * - Single node list
 * - n equals the length of the list
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let count = 0;
    let temp = head;

    // First pass: count total nodes
    while (temp !== null) {
        count++;
        temp = temp.next;
    }

    temp = head;
    count -= n;

    // If the node to remove is the head
    if (count === 0) {
        return head.next;
    }

    // Second pass: reach node before the target
    while (--count > 0 && temp !== null) {
        temp = temp.next;
    }

    // Remove the nth node from end
    if (temp.next !== null) {
        temp.next = temp.next.next;
    }

    return head;
};

/**
 * Revision Notes:
 * - This is a clean and intuitive two-pass solution.
 * - Works well when modifying the list in-place.
 * - Can be optimized to a one-pass solution using
 *   fast and slow pointers.
 * - Always handle the head-removal case explicitly.
 */
