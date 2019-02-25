function solveCombinationSum(nums, target) {
    let output = [];

    comboSumRecurse([], nums, output, 0, target);

    return output;
}

function comboSumRecurse(subset, nums, output, index, target) {
    if(target == 0) {
        output.push(subset);
        return;
    }

    if(index == nums.length) {
        return;
    }

    if(nums[index] <= target) {
        comboSumRecurse([...subset, nums[index]], nums, output, index, target - nums[index]);
    }

    comboSumRecurse([...subset], nums, output, index + 1, target)
}

console.log(solveCombinationSum([2,3,5], 8))