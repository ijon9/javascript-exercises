const findTheOldest = function(arr) {
    return arr.reduce((total, curr) => {
        let age0 = 0;
        if(total.yearOfDeath === undefined) {
            age0 = 2026 - total.yearOfBirth;
        } else age0 = total.yearOfDeath - total.yearOfBirth;
        let age1 = 0;
        if(curr.yearOfDeath === undefined) {
            age1 = 2026 - curr.yearOfBirth;
        } else age1 = curr.yearOfDeath - curr.yearOfBirth; 
        return age1 > age0 ? curr : total;    
    })
};

// Do not edit below this line
module.exports = findTheOldest;
