/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Optimization: If the lowest number is greater than zero, 
        // it's impossible for the sum to be zero.
        if (nums[i] > 0) break;
        
        // Skip duplicate values for our fixed first number 
        // to avoid duplicate triplets in the output.
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // Set up two pointers
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicate values for the left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // Move both pointers inward after finding a match
                left++;
                right--;
            } else if (sum < 0) {
                // Sum is too small, move the left pointer to the right to increase sum
                left++;
            } else {
                // Sum is too large, move the right pointer to the left to decrease sum
                right--;
            }
        }
    }
    
    return result;
};
