/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const helper = (left, right) => {
        if (left > right) {
            return null;
        }
        
        // Pick the middle element as root
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        node.left = helper(left, mid - 1);
        node.right = helper(mid + 1, right);
        
        return node;
    };
    
    return helper(0, nums.length - 1);
};
