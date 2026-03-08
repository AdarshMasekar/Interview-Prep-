var findDifferentBinaryString = function(nums) {
    let result = "";
    
    // Use Cantor's diagonal argument: flip the i-th bit of the i-th string
    for (let i = 0; i < nums.length; i++) {
        const bit = nums[i][i];
        result += bit === '0' ? '1' : '0';
    }
    
    return result;
};
