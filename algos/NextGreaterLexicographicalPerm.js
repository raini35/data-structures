function nextPerm(nums) {
  let i = nums.length - 1; 

  while(i >= 1) {
    let current = nums[i];
    let next = nums[i - 1];

    if(current > next) {
      break;
    }
    i--;
  }

  if(i === 0) {
    return nums.reverse();
  } else {
    let switchIndex = nums.length - 1;

    while(nums[i - 1] >= nums[switchIndex]) {
      switchIndex--;
    }

    let temp = nums[i -1];
    nums[i - 1] = nums[switchIndex];
    nums[switchIndex] = temp; 
  
    let leftIndex = i;
    let rightIndex = nums.length - 1;

    while(leftIndex < rightIndex) {
      let temp = nums[leftIndex];
      nums[leftIndex] = nums[rightIndex];
      nums[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }

  }

  return nums;
}

console.log(nextPerm([3,2,1,1]));