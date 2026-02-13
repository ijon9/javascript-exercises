const palindromes = function (str) {
    str = str.replaceAll(' ', '').replaceAll('.', "").replaceAll(',', "").replaceAll('!', '');
    let left = 0, right = str.length - 1;
    while(left <= right) {
        if(str.charAt(left++).toLowerCase() !== str.charAt(right--).toLowerCase()) return false;
    }
    return true;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
