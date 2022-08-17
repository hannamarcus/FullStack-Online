/*

Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

Ex:
Input: '1'
Output: -1

Input: '4'
Output: -4

Input: 'cow'
Error

*/

// PJ's solution
const negativeNum = (str) => {
    if (str == Number(str)) {
        return -str;
    }
    throw 'This is not a number';
}

console.log('negativeNum("-1")', negativeNum("-1"));
console.log('negativeNum("4")', negativeNum("4"));
console.log('negativeNum("cow")', negativeNum("cow"));

// Official solution

var getNegative = function (numString){
  var negNum = numString * -1;

  if (isNaN(negNum)){
    throw 'input must be coercible to a number'
  }

  return negNum
}