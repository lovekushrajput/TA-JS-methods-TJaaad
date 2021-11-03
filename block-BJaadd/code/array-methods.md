Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
- Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
- Example:
```js
let elements = ["Fire","Air", "Water"]
console.log(elements.join()) // Fire,Air,Water
console.log(elements.join("")) // FireAirWater
console.log(elements.join("-")) // Fire-Air-Water
```
- `Join` The join methods creates and return  a new string  by concatinating all the elements in the  array.
If the array has only one item them item will be returned without using seperator. 
- No it does not mutate the original array.


3. `flat`
- Parameter: flat accepts one parameter that defines to what depth they will try to making it flat
- return: return the flat array as a output.
- Example: 
```js
let numbers = [1,2, [3, 4, [5, 6, [7, 8]]]]
console.log(numbers.flat(Infinity));//[1,2,3,4,5,6,7,8]
console.log(numbers.flat(3)); // [1,2,3,4,5,6,[7,8]]
console.log(numbers.flat()); // [1,2,3,4,[5,6,[7,8]]]
```
-`Flat` flat is used to crate a flat structure of  the array . By default  flat convert first layer into flat structure. 
- No it does not mutate the original array.


4. `push`
- Parameter: accepts one parameter 
- Return: it returns the pushed array as an output
- Example:
```js
let colors = ["Aqua","Green", "Red"]
colors.push("White")
4
colors // ["Aqua","Green", "Red" , "White"]

let flower = ["Rose", "Sunflower", "marrygold",]
flower.push("tulip")
4
flower // ["Rose", "Sunflower", "marrygold","tulip"]

let animals = ["Lion", "deeer", "tiger"]
animals.push("Fox")
4
animals //  ["Lion", "deeer", "tiger" , "Fox"]
```
- `push` push is used to add an elements at the end of the Array.
- Yes it mututes the original array.


5. `indexOf`
- Parameter: it accets one parameter
- Return: it return thr array as output.
- Example:
```js
let animals = ["Lion", "deeer", "tiger" , "Fox"]
animals.indexOf("Lion") // 0
animals.indexOf("deeeeer") // -1
aniamls.indexOf("Fox") // 4
```
- `indexOf` indexOf is used to find index of the elemets. if the value is not present then it returns -1.
- No it does not mutate the original array.


6. `lastIndexOf`
- Parameter: it accets one parameter
- Return: it return thr array as output.
- Example:
```js
let numbers = [1,2,3,4,5,6,7,8,1]
numbers.lastIndexOf(8); // 7
numbers.lastIndexOf(1); // 8
numbers.lastIndexOf(3); // 2
```
- `lastIndexOf` lastIndexOf give you the same index of the elements.
- No it does not mututes the original array.


7. `includes`
- Parameter: it accets one parameter
- Return: it return thr true or false as output.
- Example:
```js
let colors = ["Aqua","Green", "Red"]
colors.includes("Aqua"); // true
colors.includes("Green") // true
colors.includes("Aquaaaaa") // false
```
- `includes` the includes returns the Boolean value true or false.
- No it does not mututes the original array.


8. `reverse`
- Example:
```js
let numbers = [1,2,3,4,5,6,7,8,9]
numbers.reverse(); [9,8,7,6,5,4,3,2,1] 

let colors = ["Aqua", "Blue", "Green", "Yellow"]
colors.reverse(); ["Yellow", "Green" ,"Blue","Aqua"]

let Animals = ["Lion", "deeer", "tiger" , "Fox"]
animals.reverse(); ["Fox", "tiger", "deer", "Lion"]
```
- `reverse` reverse i used for reversing the index of the array.
- Yes it does mututes the original array.


9. `every`
- parameter: every method accepts three parameter and 
1st parameter is the current element being processed and 
rest of two are optional 
2nd - index
3re - array
- Return: it return true if the callback function return truthy for every array elemets.
- Example:
```js
let number = [1,2,3,4,5,6,7]
let ret = number.every(function(number){
  return number > 0 ; 
})
ret // true 

  let ret = number.every(function(number){
  return number < 0 ; 
})
ret // false
let ret = number.every(function(number){
  return number <= 0 ; 
})
ret  // false
```
- `every`every method also accept callback function only  condition is   - The whole condition is only return true if each element of the array return  true when it is pass to callback function.
- No it does not mututes the original array.



10. `shift`
- parameter: it accepts the one parametrer 
- Return: return the value as output.
- Example:
```js
let color = ["red" , "pink" , "yellow", "blue"]
color.shift("red") // "red"
color // ["pink" , "yellow", "blue"]

color.shift("yellow") // "yellow"
color // ["pink", "blue"]

color.shift("blue") // "blue"
color // ["pink"]
```
- `Shift` shift is used for removing the first elements and shifting the other element to the lower index.
- Yes it mutates the original array.



11. `splice`
- Parameter: it accepts the three parameter 
1st- starting from index
2nd - end index want to delete (optional parameter)
3rd - want to add something (optional parameter)
- Return: it return the elements that got deleted
- Example:
```js
let animals = ["lion" , "tiger" , "deer" , "fox"]
animals.slice(0, 1) // ["lion"]

animals.slice(0,2) // ["lion","tiger"]

animals.slice(0, 1 , "blackpanther") // ["lion"]
```
- `splice` splice is used for removing specific elemnts from the array.
- Yes it mutates the original array.



12. `find`
- Return: true/ false
- Example:
```js
let animal = ["lion" , "tiger" , "deer" , "fox"]
let Findreturn = animal.find(function (animal){
  return animal === "lion" && animal === "monkey"
}); // lion
```
- `find` find also accept callback function and that callback funcion needs to return true / false.
whenever the value will be there in array it will return that value otherwise  it return undefined
- No it does not mututes the original array.



13. `unshift`
- Parameter: it accepts multiple parameter;
- Return: it return the value as output.
- Example:
```js
let color = ["red" , "pink" , "yellow", "blue"]
color.unshift("tomato") // 5 ["tomato","red" , "pink" , "yellow", "blue"]
color.unshift("A","B") // 7 ["A", "B","tomato","red" , "pink" , "yellow", "blue"]
color,unshift("lightgreen") // 8 ["lightgreen","A", "B","tomato","red" , "pink" , "yellow", "blue"]
```
- `unshift` unshift is used for adding elemets in the start of the array similarly as push.
- Yes it mutates the original array.



14. `findIndex`
- parameter: it accepts three parameter and 
1st parameter is the current element being processed and 
rest of two are optional 
2nd - index(optional )
3re - array(optional )
- Return: it return first value that condition is true.
- Example:
```js
let num = [1,2,3,4,5,6,7,8,9]
function isTwelve (num) {
  return num > 8
}
let findIndexReturn = num.findIndex(isTwelve) // 8 it means 9 is greater than 8

function isTwelve (num,index,array) {
  console.log(num, index, array)
  return num > 5
}
let findIndexReturn = num.findIndex(isTwelve) // 1 0 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]  2 1 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
- `FindIndex` it also get access to (num, index, array),return the index the first value that matches the condition here.
- No it does not mutates the original array.


15. `filter`
- parameter: it accepts three parameter and 
1st parameter is the current element being processed and 
rest of two are optional 
2nd - index(optional )
3re - array(optional )
- Return: alwaus return smaller or same size of array.
- Example:
```js
let num = [1,2,3,4,5,6,7,8,9]
function isEven (num) {
  return num % 2 === 0
}
let evenNumbers = num.filter(isEven) // undefined
evenNumbers // (4) [2, 4, 6, 8]


function isOdd (num) {
  return num % 2 !=== 0
}
let oddNumbers = num.filter(isOdd) // undefined
oddNumbers // [1,3,5,7,9]
```
- `filter` filter also accepts callback function and 
if that callback function return true the value of that is passed inside will stored into newarray and 
if it return false it will not stored into new array.
- No it does not mutates the array.



16. `flat`
- Parameter: flat accepts one parameter that defines to what depth they will try to making it flat
- return: return the flat array as a output.
- Example: 
```js
let numbers = [1,2, [3, 4, [5, 6, [7, 8]]]]
console.log(numbers.flat(Infinity));//[1,2,3,4,5,6,7,8]
console.log(numbers.flat(3)); // [1,2,3,4,5,6,[7,8]]
console.log(numbers.flat()); // [1,2,3,4,[5,6,[7,8]]]
```
-`Flat` flat is used to crate a flat structure of  the array . By default  flat convert first layer into flat structure. 
- No it does not mutate the original array.



17. `forEach`
- parameter: it accepts one parameter
- Return: return the undefined
- Example:
```js
let color = ["Aqua", "red", "white", "pink", "black", "yellow"]
function log(color){
  console.log(color)
}
color.forEach(log) // Aqua red white pink black yellow - in vertical direction
 
let numbers = [1,2,3,4,5,6,7,8]
function log(number){
  console.log(number)
}
number.forEach(log) // 1 2 3 4 5 6 7 8  - in vertical direction
 ```
- `forEach`forEach is a array method that accepts a call function and applies that callback function on each element of the array and doesn`t return does not return anything.


18. `map`
- parameter: it accepts three parameter and 
1st parameter is the current element being processed and 
rest of two are optional 
2nd - index(optional )
3re - array(optional )
- Example:
```js
let num = [1,2,3,4,5,6,7,8,9]
function double(num){
  return num * 2;
}
let doubleNumber = num.map(double); //  [2, 4, 6, 8, 10, 12, 14, 16, 18]
```
- `map` map acepts a callback function and calls that callback function with three value.
- No it does not mutate the original array.


19. `pop`
- Parameter: does not accept any parameter
- Return: it returns the element that you git deleted.
- Example:
```js
let color = ["blue","red","white","black"]
color.pop() // "black"
color.pop() // "white"
color.pop()  // ""red
```
- `pop` pop is used for deleting one element from an array .
- No it  does not mutates the array.


20. `reduce`
- Parameter: it accepts four parameter:
1st-previousValue (the value resulting from the previous call to callbackfn)
2nd-currentValue (the value of the current element)
3rd-currentIndex Optional
4th-array (the array to traverse) Optional
- Return: The value that results from callback function returned as output or return.
- Example:
```js
const num = [1,2,3,4,5,6,7,,8]
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(num.reduce(reducer)); // 10
console.log(num.reduce(reducer,10)); // 20
```
- `reduce` The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.


21. `slice`
- Return: it also return the deleted element
- Example:
```js
let color = ["blue","red","white","black"]
color.slice(1,2)  // ["red"]
color.slice(0,2) // ["blue","red", "white"]
color.slice(0,1) // ["blue"]
```
`slice` slice act very similar to splice one of the difference is slice does not mutate the array but splice mutate the array
- Yes it mutates the original array.


22. `some`
- Parameter: it accepts three parameter and 
1st parameter is the current element being processed and 
rest of two are optional 
2nd - index(optional )
3re - array(optional )
- Return: return true or false
- Example:
```js
let number = [1,2,3,4,5,6,7,8,9]
let ret = number.some(function(number){
  return number > 0
})
ret // true

let ret = number.some(function(number){
  return number > 100
})
ret // false

let ret = number.some(function(number){
  return number > -1
})
ret // true
```
- `some` some method accepts a callback function and that function needs to return true / false based on value that you pass.
- No it does not mutates the array.
