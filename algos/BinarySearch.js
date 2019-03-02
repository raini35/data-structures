function binSearch(arr, start, end, target) {
  if(start > end || end < start) {
    return -1;
  } 

  let mid = Math.floor((end - start) / 2);
  
  if(arr[mid] == target) {
    return mid;
  }

  if(arr[mid] < target) {
    return binSearch(arr, start, mid - 1)
  } else {
    return binSearch(arr, mid + 1, end);
  }
}


console.log(binSearch([1,2,3], 0, 2, 10))