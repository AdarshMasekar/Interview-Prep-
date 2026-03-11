/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    // Handle the edge case where n is 0
    if (n === 0) return 1;
    
    // Convert to binary and flip the bits
    // Get binary representation without '0b' prefix
    let binary = n.toString(2);
    
    // Flip each bit and convert back to decimal
    let complement = '';
    for (let bit of binary) {
        complement += bit === '0' ? '1' : '0';
    }
    
    return parseInt(complement, 2);
};
