/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // Helper function to calculate height and check balance
    const checkBalance = (node) => {
        // Base case: empty tree is balanced with height 0
        if (!node) {
            return [true, 0]; // [isBalanced, height]
        }
        
        // Check left subtree
        const [leftBalanced, leftHeight] = checkBalance(node.left);
        if (!leftBalanced) return [false, 0];
        
        // Check right subtree
        const [rightBalanced, rightHeight] = checkBalance(node.right);
        if (!rightBalanced) return [false, 0];
        
        // Check if current node is balanced
        const isCurrentBalanced = Math.abs(leftHeight - rightHeight) <= 1;
        const height = Math.max(leftHeight, rightHeight) + 1;
        
        return [isCurrentBalanced, height];
    };
    
    return checkBalance(root)[0];
};
