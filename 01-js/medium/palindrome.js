/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  var str1="";
  for (var i=0; i<str.length; i++) {
     if(str[i]>='a'&&str[i]<='z'){
      str1+=(str[i]);
      // console.log(str[i]);
     }
  }
  // console.log(str1);
  var str2="";
  str2=str1.split('').reverse().join('');
  // console.log(str2);
  // console.log("hi");

  // console.log(temp,str);
  // return temp==str;
  return str1==str2;
}
isPalindrome("hemmlo");

module.exports = isPalindrome;
