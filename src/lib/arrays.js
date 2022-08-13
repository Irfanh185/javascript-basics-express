const getNthElement = (index, array) => {
  // your code here

  // if (array[index] > array.length) {
  //   return array[0];
  // } else {
  //   return array[index];
  // }

  if (index > array.length - 1) {
    return array[index % 2];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  let newArr = string.split('');
  console.log(newArr);
  const filterArr = newArr.filter(function(e) {
    return e !== ',';
  });
  console.log(filterArr);
  return filterArr;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  const removeN = array.splice(index, 1);
  console.log(removeN);
  return removeN;
};

const numbersToStrings = numbers => {
  const numToString = numbers.map(function(number) {
    return number.toString();
  });
  console.log(numToString);
  return numToString;
};

const uppercaseWordsInArray = strings => {
  const upperCaseWords = strings.map(string => {
    return string.toUpperCase();
  });
  return upperCaseWords;
};

const reverseWordsInArray = strings => {
  const reverseWords = strings.map(string => {
    return string
      .split('')
      .reverse()
      .join('');
  });
  console.log(reverseWords);
  return reverseWords;
};

const onlyEven = numbers => {
  const evenNums = numbers.filter(function(number) {
    return number % 2 == 0;
  });
  return evenNums;
};

const removeNthElement2 = (index, array) => {
  let newArr = [...array];
  newArr.splice(index, 1);
  console.log(newArr);
  console.log(array);
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  const startsWithVowel = strings.filter(function(e) {
    return e[0].match(/[ieoua]/gi);
  });
  console.log(startsWithVowel);
  return startsWithVowel;
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  console.log(sum);
  return sum;
};

const sortByLastLetter = strings => {
  const sorted = strings.sort((a, b) => {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  });

  console.log(sorted);
  return sorted;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
