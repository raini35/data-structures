function maxSubArray(arr) {
    return maxSubRecurse(arr, index, 0);
}

function maxSubRecurse(arr, index, sum) {
    if(index == arr.length) {
        return 0;
    }

    let option1 = arr[index];
    let option2 = maxSubRecurse(arr, index + 1, sum + arr[index]);
    let option3 = maxSubRecurse(arr, index + 1, num[index]);

    return Math.max(option1, Math.max(option2, option3));
}