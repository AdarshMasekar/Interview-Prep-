/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        // Handle negative numbers - they are never palindromes
    if (x < 0) {
        return false;
    }
    
    // Handle single digit numbers - they are palindromes
    if (x < 10) {
        return true;
    }
    
    // Reverse the number and compare
    let original = x;
    let reversed = 0;
    
    while (x !== 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
    
};
