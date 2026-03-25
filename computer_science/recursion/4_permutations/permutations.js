const permHelp = function(arr, curr, ans) {
    if(arr.length === curr.length) ans.push(curr.slice());
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != 0) {
            const now = arr[i];
            curr.push(arr[i]);
            arr[i] = 0;
            permHelp(arr, curr, ans);
            curr.pop();
            arr[i] = now;
        }
    }
}

const permutations = function(arr) {
    const ans = [];
    permHelp(arr, [], ans);
    return ans;
};
  
// Do not edit below this line
module.exports = permutations;
