/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = '';
    let balance = 0;  // Track the balance of parentheses
    
    for (let char of s) {
        if (char === '(') {
            // Only add if balance > 0 (not the outermost)
            if (balance > 0) {
                result += char;
            }
            balance++;
        } else {
            // balance > 1 means this is not the outermost closing parenthesis
            balance--;
            if (balance > 0) {
                result += char;
            }
        }
    }
    
    return result;
};
