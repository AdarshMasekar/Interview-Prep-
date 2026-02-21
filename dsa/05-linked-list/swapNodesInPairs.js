/**
 * -------------------------------------------------------
 * Problem: Swap Nodes in Pairs
 * Link: https://neetcode.io/problems/swap-nodes-in-pairs
 *
 * Category: Linked List
 * Pattern: Pointer Manipulation
 * Difficulty: Medium
 *
 * Key Insight:
 * - We swap nodes in pairs without modifying values.
 * - A dummy node simplifies handling the head swap.
 * - We rewire pointers carefully for each pair.
 *
 * Approach:
 * 1. Create a dummy node pointing to head.
 * 2. Use a `prev` pointer to track node before the pair.
 * 3. While two nodes exist:
 *    - Identify first and second nodes.
 *    - Rewire pointers:
 *        first.next = second.next
 *        second.next = first
 *        prev.next = second
 *    - Move prev forward to continue.
 * 4. Return dummy.next.
 *
 * Time Complexity: O(n)
 * - Each node visited once.
 *
 * Space Complexity: O(1)
 * - In-place pointer manipulation.
 *
 * Edge Cases:
 * - Empty list
 * - Single node list
 * - Odd number of nodes (last node remains unchanged)
 *
 * -------------------------------------------------------
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // Dummy node to simplify edge handling
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        // Swap nodes
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move to next pair
        prev = first;
    }

    return dummy.next;
};

/**
 * Revision Notes:
 * - Always use a dummy node for head modifications.
 * - Swap nodes by changing pointers, not values.
 * - Very common linked list interview question.
 * - Recursive version is also possible.
 */
