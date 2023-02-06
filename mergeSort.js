function mergeSort(arr) {
  if (arr.length < 2) return arr;
  else {
    let half = Math.ceil((arr.length - 1) / 2);
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half));
    
    return merge(left, right);
  }
}

function merge(left, right) {
  let arr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) arr.push(left.shift());
    else arr.push(right.shift());
  }
  while (left.length > 0) {
    arr.push(left.shift());
  }
  while (right.length > 0) {
    arr.push(right.shift());
  }

  return arr;
}


let arr = [4,2,6,8,1,7,3,9,1,5,3,1,4];
console.log(mergeSort(arr));