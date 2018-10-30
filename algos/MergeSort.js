function mergeSort(input) {
  var start = 0;
  var end = input.length - 1;
  return mSort(input, start, end);
}

function mSort(input, start, end) {
  var mid = Math.floor((start + end) / 2);

  if(start === end) {
    return [input[start]];
  }

  var left = mSort(input, start, mid);
  var right = mSort(input, mid + 1, end);

  return merge(left, right);
}

function merge(left, right) {
  var leftIndex = 0;
  var rightIndex = 0;
  var container = [];

  while(leftIndex + rightIndex < left.length + right.length) {
    if (typeof left[leftIndex] == 'undefined') {
      container.push(right[rightIndex]);
      rightIndex++;
    }
    else if (typeof right[rightIndex] == 'undefined'){
      container.push(left[leftIndex]);
      leftIndex++;
    }
    else if(left[leftIndex] <= right[rightIndex]) {
      container.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      container.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return container;
}

var input = [10,9,8,7,6,5,4,3,2,1];

console.log(mergeSort(input));

console.log(input)
