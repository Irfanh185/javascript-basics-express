function sayHello(string) {
  return `Hello, turtle!`;
}
// function sayHello(string) {
//   return 'Hello, fsghjdfkhgf!';
// }

function uppercase(string) {
  return string.toUpperCase();
}

function lowercase(string) {
  return string.toLowerCase();
}

function countCharacters(string) {
  // your code here
  return string.length;
}

function firstCharacter(string) {
  return string.charAt(0);
}

function firstCharacters(string, n) {
  return string.slice(0, n);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
