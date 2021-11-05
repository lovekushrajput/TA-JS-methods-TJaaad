// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.includes('is');
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let ret = numbers.every(function(number){
  return number / 3
})
console.log(ret);
// -  Sort Array from smallest to largest
console.log([...numbers].sort((a,b)=>(a-b)));
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
numbers[numbers,length-1];
// - Find longest string in strings

// - Find all the even numbers
function isEven(num){
  return num % 2===0;
}
let evenNUmber = numbers.filter(isEven);
// - Find all the odd numbers
function isodd(num){
  return num % 2 !== 0;
}
let oddNUmber = numbers.filter(isodd);
// - Place a new word at the start of the array use (unshift)
strings.unshift("Apple")
// - Make a subset of numbers array [18,9,7,11]
numbers.slice([18,9,7,11]);
// - Make a subset of strings array ['a','collection']
strings.slice(['a','collection'])
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,"1221")
numbers.splice(3,1,"1891")
// - Replace words in strings array with the length of the word
;
console.log(strings.splice(1,strings.lenght-1,"length"));

// - Find the sum of the length of words using above question
let joined = strings.join(' ');
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
 let findFirstName = customers.map((customer)=>customer.firstname.startsWith("J"))
 console.log(findFirstName);
// - Create new array with only first name
let findFirst = customers.map((customer)=>customer.firstname)
// - Create new array with all the full names (ex: "Joe Blogs")
let findFull = customers.map((customer)=>`${customer.firstname} ${customer.lastname}`)
// - Sort the array created above alphabetically
console.log([...findFull].sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
let findFirstVowel = customers.filter((customer)=>{
  if(customer.firstname.includes("a") 
  || customer.firstname.includes("e") 
  || customer.firstname.includes("i")
  || customer.firstname.includes("o")
  || customer.firstname.includes("u"))  
  {
  return true }
  else{ return false}})