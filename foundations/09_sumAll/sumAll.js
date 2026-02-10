const sumAll = function(num0, num1) {
    if(!Number.isInteger(num0) || !Number.isInteger(num1)) return "ERROR";
    if(num0 < 0 || num1 < 0 ) return "ERROR";
    let left = Math.min(num0, num1);
    let right = Math.max(num0, num1);
    let ans = 0;
    for(let i=left; i <= right; i++) {
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
