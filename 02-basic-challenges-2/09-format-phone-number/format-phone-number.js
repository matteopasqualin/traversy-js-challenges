function formatPhoneNumber(numbersArray) {
    
    //console.log(numbersArray.slice(0,3));
    //console.log(numbersArray.slice(3,6));
    //console.log(numbersArray.slice(6,numbersArray.length));

    //return 'fine';
    return `(${numbersArray.slice(0,3).join('')}) ${numbersArray.slice(3,6).join('')}-${numbersArray.slice(6).join('')}`
}

module.exports = formatPhoneNumber;
