function solveKnapsack(weights, profits, target) {
    let dp = new Array(weights.length);

    for(var i = 0; i < weights.length; i++) {
        let temp = new Array(target + 1);
        dp[i] = temp;
    }

    
    return knapsackRecurse(dp, weights, profits, 0, target)
}

function knapsackRecurse(dp, weights, profits, index, target) {
    if(index < 0 || index >= weights.length || target <= 0) {
        return 0;
    }

    if(dp[index][target] !== undefined) {
        return dp[index][target]
    }

    let profit1 = 0;
    
    if(weights[index] <= target) {
        profit1 = profits[index] + knapsackRecurse(dp, weights, profits, index + 1, target - weights[index]);
    }

    let profit2 = knapsackRecurse(dp, weights, profits, index + 1, target);

    dp[index][target] = profit1 > profit2 ? profit1 : profit2;

    return dp[index][target];
}

console.log(solveKnapsack([1,2,3], [3,2,1], 1))