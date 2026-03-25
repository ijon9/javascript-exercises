const pascal = function(n) {
    if(n === 1) return [1];
    const prev = pascal(n-1);
    const arr = [1];
    for(let i=0; i<prev.length-1; i++) {
        arr.push(prev[i] + prev[i+1]);
    }
    arr.push(1);
    return arr;
};
  
// Do not edit below this line
module.exports = pascal;
