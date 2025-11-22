
// QUESTA FN RITORNA I VALORI DUPLICATI
function removeDuplicatesALT(arrayValues) {
  let duplicates = [];
  let removedDuplicates = [];
  for (let i = 0; i < arrayValues.length; i++) {
    if (duplicates.indexOf(arrayValues[i]) !== -1 && removedDuplicates.indexOf(arrayValues[i]) < 0) {
      removedDuplicates.push(arrayValues[i]);
    }
    duplicates.push(arrayValues[i]);
  }
  return removedDuplicates;
}

function removeDuplicates(arrayValues) {
  let duplicates = [];
  let newArray = [];
  for (let i = 0; i < arrayValues.length; i++) {
    if (duplicates.indexOf(arrayValues[i]) < 0) {
      newArray.push(arrayValues[i]);
    }
    duplicates.push(arrayValues[i]);
  }
  return newArray;
}

module.exports = removeDuplicates;
