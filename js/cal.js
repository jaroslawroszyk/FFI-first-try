var math = require('./math');
var result = null;

console.log('foo');


// result = math.add(5, 2);
// console.log('5+2=' + result);

// result = math.minus(5, 2);
// console.log('5-2=' + result);

// result = math.multiply(5, 1000002);
// console.log('5*2=' + result);

// function add() 
// {
// var math = require('./math');
// var result = null;
// :()
function add() {

    var num1 = parseInt(document.getElementById("firstnumber").value);
    var num2 = parseInt(document.getElementById("secondnumber").value);
    result = math.add(num1, num2);
    console.log(result);
    document.getElementById("answer").value = result;
}
