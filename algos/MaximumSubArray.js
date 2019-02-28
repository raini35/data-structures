function maxSubArray(nums) {
    let sum = 0;
    let ans = -Infinity;

    for(var i = 0; i < nums.length; i++) {
        let current = nums[i];
        
        sum = current > sum + current ? current : sum + current;
        ans = Math.max(ans, sum);

    }

    return ans;
}

console.log(maxSubArray([-3,2,3]));