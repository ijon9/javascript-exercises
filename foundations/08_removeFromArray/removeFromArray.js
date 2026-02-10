const removeFromArray = function(arr, ...nums) {
    for(const num of nums) {
        arr = arr.filter((n) => n !== num);
    }
    return arr;
};

// console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
