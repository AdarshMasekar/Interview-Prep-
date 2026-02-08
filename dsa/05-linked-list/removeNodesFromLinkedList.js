/**
 * -------------------------------------------------------
 * Problem: Remove Nodes From Linked List
 * Link: https://neetcode.io/problems/remove-nodes-from-linked-list
 *
 * Category: Linked List
 * Pattern: Monotonic Stack
 * Difficulty: Medium
 *
 * Key Insight:
 * - A node should be removed if there exists a node with a
 *   greater value to its right.
 * - By maintaining a decreasing (monotonic) stack, we can
 *   efficiently track and remove such nodes in one pass.
 *
 * Approach:
 * 1. Create a dummy node with a very large value to handle
 *    edge cases cleanly.
 * 2. Use a stack to maintain nodes in decreasing order.
 * 3. Traverse the list:
 *    - While stack top has a smaller value than current node,
 *      pop it (it must be removed).
 *    - Link the current node to the new stack top.
 *    - Push the current node onto the stack.
 * 4. Return the list starting from dummy.next.
 *
 * Time Complexity: O(n)
 * - Each node is pushed and popped at most once.
 *
 * Space Complexity: O(n)
 * - Stack stores references to list nodes.
 *
 * Edge Cases:
 * - Strictly increasing list → only last node remains
 * - Strictly decreasing list → list remains unchanged
 * - Single node list
 *
 * -------------------------------------------------------
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next || null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    const dummy = new ListNode(Number.MAX_SAFE_INTEGER, head);
    const stack = [dummy];

    let current = head;
    while (current) {
        // Remove nodes smaller than current
        while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
            stack.pop();
        }

        // Re-link previous greater node to current
        stack[stack.length - 1].next = current;

        // Push current node onto stack
        stack.push(current);
        current = current.next;
    }

    return dummy.next;
};

/**
 * Revision Notes:
 * - This is an O(n) solution using a monotonic decreasing stack.
 * - Dummy node avoids handling empty-stack edge cases.
 * - Stack stores node references, not values.
 * - Alternative approach: reverse list, track max, reverse back.
 */
