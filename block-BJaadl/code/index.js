let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord (word){
return word.lenght
  }
let longestWord = words.find(findLongestWord);
  

// - Convert the above array "words" into an array of length of word instead of word.
for(let i = 0; i<words.length; i++){
  console.log(words[i].length)
};
// - Create a new array that only contains word with atleast one vowel.
 function log (word){
   console.log(word)
 }
// - Find the index of the word "rhythm"
console.log(words.indexOf(`rhythm`));
// - Create a new array that contians words not starting with vowel.
 
// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedByThree = ((num) => {
  return  num % 3 ===0;
})
console.log(numbers.filter(multipliedByThree));
// - Create a new array that contains only even numbers
let isEven = ((num) => {
  return  num % 2 ===0;
})
console.log(numbers.filter(isEven));
// - Create  a new array that contains only odd numbers.
let isOdd = ((num) => {
  return  num % 2 !==0;
})
console.log(numbers.filter(isOdd));
// - Create a new array that should have true for even number and false for odd numbers.
let isEvenTrue = ((num)=> {
  if(num % 2 === 0){
    return true
  } if(num % 2 !==0){
    return false
  }
})
console.log(numbers.map(isEvenTrue));
// - Sort the above number in assending order.
let sortNumber = ((a,b)=>{
return a-b
})
console.log(numbers.sort(sortNumber));
// - Does sort mutate the original array?
yes 
console.log(numbers);
// - Find the sum of the numbers in the array.
let add = ((accu, cu)=>{
 return accu + cu
})
console.log(numbers.reduce(add));
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
