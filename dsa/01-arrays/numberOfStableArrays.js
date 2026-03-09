/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1e9 + 7;
    
    // dp[i][j][k][l] = number of ways to arrange i zeros and j ones
    // ending with digit k (0 or 1) with l consecutive k's at the end
    const dp = Array(zero + 1).fill(0).map(() => 
        Array(one + 1).fill(0).map(() => 
            Array(2).fill(0).map(() => 
                Array(limit + 1).fill(0)
            )
        )
    );
    
    // Base cases: single zeros
    for (let l = 1; l <= Math.min(zero, limit); l++) {
        dp[l][0][0][l] = 1;
    }
    
    // Base cases: single ones
    for (let l = 1; l <= Math.min(one, limit); l++) {
        dp[0][l][1][l] = 1;
    }
    
    // Fill DP table
    for (let i = 0; i <= zero; i++) {
        for (let j = 0; j <= one; j++) {
            // Add a 0 after some 1s
            if (i > 0) {
                for (let prevOnes = 1; prevOnes <= Math.min(j, limit); prevOnes++) {
                    dp[i][j][0][1] = (dp[i][j][0][1] + dp[i-1][j][1][prevOnes]) % MOD;
                }
            }
            
            // Add a 1 after some 0s
            if (j > 0) {
                for (let prevZeros = 1; prevZeros <= Math.min(i, limit); prevZeros++) {
                    dp[i][j][1][1] = (dp[i][j][1][1] + dp[i][j-1][0][prevZeros]) % MOD;
                }
            }
            
            // Extend consecutive 0s
            for (let l = 2; l <= Math.min(i, limit); l++) {
                dp[i][j][0][l] = dp[i-1][j][0][l-1];
            }
            
            // Extend consecutive 1s
            for (let l = 2; l <= Math.min(j, limit); l++) {
                dp[i][j][1][l] = dp[i][j-1][1][l-1];
            }
        }
    }
    
    let result = 0;
    for (let l = 1; l <= limit; l++) {
        result = (result + dp[zero][one][0][l] + dp[zero][one][1][l]) % MOD;
    }
    
    return result;
};
