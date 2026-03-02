/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    let reversed = 0;
    let temp = x;
    
    while (temp !== 0) {
        const digit = temp % 10;
        temp = Math.trunc(temp / 10);
        
        // Check for overflow before multiplying
        if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && digit > 7)) {
            return 0;
        }
        if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && digit < -8)) {
            return 0;
        }
        
        reversed = reversed * 10 + digit;
    }
    
    return reversed;
};
