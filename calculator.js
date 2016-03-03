var input1 = document.getElementById('field1');
var input2 = document.getElementById('field2');
var mathed = document.getElementById('output');

var add = document.getElementById("add");
var sub = document.getElementById("sub");
var multi = document.getElementById("multi");
var divide = document.getElementById("divide");

// Multiplies
function multiply(num1, num2) {
  var product = parseFloat(num1) * parseFloat(num2);
  console.log(product);
  return output(product);
};
// Divides
function dividify(num1, num2) {
  var quotient = parseFloat(num1) / parseFloat(num2);
  console.log(quotient);
  return output(quotient);
};
// Adds
function addify(num1, num2) {
  var sum = parseFloat(num1) + parseFloat(num2);
  console.log(sum);
  return output(sum);
};
// Subtracts
function subtractify(num1, num2) {
  var difference = parseFloat(num1) - parseFloat(num2);
  console.log(difference);
  return output(difference);
};

function output (math) {
  mathed.innerHTML = math;
}

multi.addEventListener('click', function(multi){
  multiply(input1.value, input2.value);
  
});

divide.addEventListener('click', function(div){
  dividify(input1.value, input2.value);
});

add.addEventListener('click', function(add){
  addify(input1.value, input2.value);
});

sub.addEventListener('click', function(sub){
  subtractify(input1.value, input2.value);
});






/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */