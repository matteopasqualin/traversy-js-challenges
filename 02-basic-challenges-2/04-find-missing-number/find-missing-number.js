function findMissingNumber(arrayValues) {
    if(!arrayValues){
        return undefined;
    }

    if(!arrayValues.length){
        return 1;
    }

    let result = 0;

    for (let i = 1; i <= arrayValues.length; i++) {
        if (arrayValues.indexOf(i) < 0) {
            result = i;
        }
    }

    return result;
}

module.exports = findMissingNumber;
