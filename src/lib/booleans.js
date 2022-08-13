function negate(a) {
  // your code here
  if (a === true) {
    return false;
  } else {
    return true;
  }
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === true && b === false) {
    return false;
  } else if (a === false && b === true) {
    return false;
  } else {
    return false;
  }
}

function either(a, b) {
  // your code here
  if (a === true || b === true) {
    return true;
  } else if (a === true || b === false) {
    return false;
  } else if (a === false || b === true) {
    return false;
  } else if (a === false || b === false) {
    return false;
  }
}

function none(a, b) {
  if (
    (a == true && b === true) ||
    (a === true && b === false) ||
    (a === false && b === true)
  ) {
    return false;
  } else if (a === false && b === false) {
    return true;
  }
}

function one(a, b) {
  if ((a == true && b === true) || (a === false && b === false)) {
    return false;
  } else if (a === true || b === false || (a === false || b === true)) {
    return true;
  }
}

function truthiness(a) {
  // your code here
  if (a === '' || a === 0 || a === null || a === undefined || !!a === !!NaN) {
    return false;
  } else {
    return true;
  }
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function isGreaterThan(a, b) {
  // your code here
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  if (a <= b) {
    return true;
  } else {
    return false;
  }
}

function isOdd(a) {
  // your code here
  if (a % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

function isEven(a) {
  // your code here
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function isSquare(a) {
  if (Number.isInteger(Math.sqrt(a))) {
    return true;
  } else {
    return false;
  }
}

function startsWith(char, string) {
  // your code here
  console.log(char);
  if (char === string[0]) {
    return true;
  } else {
    return false;
  }
}

/* refactor */
function containsVowels(string) {
  // your code here
  // if (string === 'cat' || string === 'DOG') {
  //   return true;
  // } else if (string === 'why') {
  //   return false;
  // }

  if (string.match(/[ieoua]/gi)) {
    return true;
  } else {
    return false;
  }
}

function isLowerCase(string) {
  // your code here
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
