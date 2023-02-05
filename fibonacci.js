// iteration
function fibs(num) {
  let arr = [0, 1];

  for (let i = 0; i < num - 2; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1])
  }

  return arr;
}

console.log(fibs(8));

//recursion
function fibsRec(num=0) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  function fibsRecInner(num, arr=[0,1]) {
    if (num === 1) return 0;
    if (num === 2) return 1;
    if (num > arr.length) fibsRecInner(num-1, arr);
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return arr;
  }
  return fibsRecInner(num);
}

console.log(fibsRec(8));