/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str=str.toLowerCase();
    var count =0;
    for( var c of str){
      count+=(c=='a'||c=='e'||c=='i'||c=='o'||c=='u');
    }
    // console.log(count)
    return count;

}
countVowels("hemlo");

module.exports = countVowels;