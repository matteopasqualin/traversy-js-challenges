function arrayIntersection(arr1, arr2) {
    const newArray=[];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            newArray.push(arr1[i]);
        }
    }
    return newArray;
}

module.exports = arrayIntersection;
