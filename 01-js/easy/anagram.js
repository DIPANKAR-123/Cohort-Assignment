/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // var temp1 = str1.split("").sort().join("");
  var temp2 = str2.toLowerCase().split("").sort().join("");
  var temp1 = str1.toLowerCase().split("").sort().join("");
  // var temp2 = str2.sort();
  // document.write()
  // console.log(temp1, temp2);
  console.log("hellp",str1,str2,temp1,temp2);
  return temp1 == temp2;
}

isAnagram("hello","hemlo");
module.exports = isAnagram;
