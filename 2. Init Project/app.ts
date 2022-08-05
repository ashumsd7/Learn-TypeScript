function add(n1: number, n2: number, show: boolean, phrase:string) {
  console.log(typeof n1);

  let result = n1+n2

  if (show) {
    console.log(phrase+  result);
  }
  return result;
}

// const number1= '2';
const number1 = 4;
const number2 = 2.9;

console.log(add(number1, number2, true, "Result is: "));
