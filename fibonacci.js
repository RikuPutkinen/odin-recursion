// iteration
function fibs(num) {
  let arr = [0, 1];

  for (let i = 0; i < num - 2; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1])
  }

  return arr;
}

console.log(fibs(8));