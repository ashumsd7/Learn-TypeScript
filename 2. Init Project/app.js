function add(n1, n2, show, phrase) {
    console.log(typeof n1);
    var result = n1 + n2;
    if (show) {
        console.log(phrase + result);
    }
    return result;
}
// const number1= '2';
var number1 = 4;
var number2 = 2.9;
console.log(add(number1, number2, true, "Result is: "));
