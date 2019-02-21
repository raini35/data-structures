function solveKnapsack(profits, weights, target) {
    let ouput = new Array(profits.length);

    for(var i = 0; i < output.length; i++) {
        let temp = new Array(target + 1);
        output[i] = temp;
    }

    return recurseKnapsack(dp, profits, weights, 0, target);
}

function recurseKnapsack(dp, profits, weights, index, target) {
    if(index >= profits.length || target == 0 || index == 0) {
        return;
    }

    if(dp[index][target] !== undefined) {
        return dp[index][target];
    }

    let profit1 = 0;

    if(weights[index] <= target) {
        profit1 = profits[index] + recurseKnapsack(dp, profits, weights, index, target - weights[index]);
    }

    let profit2 = recurseKnapsack(dp, profits, weights, index + 1, target);

    dp[index][target] = profit1 > profit2 ? profit1 : profit2;

    return dp[index][target];
}