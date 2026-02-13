const add = function(num0, num1) {
  return num0 + num1;
};

const subtract = function(num0, num1) {
	return num0 - num1;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num);
};

const power = function(base, exp) {
  if(exp == 0) return 1;
  let ans = base;
  for(let i=0; i<exp-1; i++) {
    ans *= base;
  }
  return ans;
};

const factorial = function(num) {
  if(num === 0) return 1;
  let ans = 1;
  for(; num > 0; num--) ans *= num;
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
