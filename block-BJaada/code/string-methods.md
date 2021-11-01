Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.


2. `toUpperCase`
- Return: uppercased word or characeter as result; 
- Example:
```JS
 const name = "lovekush";
const.toUpperCase(); // LOVELKUSH 
let user = "sam";
user.toUpperCase(); // SAM
let username = "altcampus";
username.toUpperCase() // ALTCAMPUS
```
- `toUppercase` convert any value into uppercase


3. `toLowerCase`
- Return: lowercased value as result; 
- Example:
```JS
"HELLO"
"HELLO".toLowerCase() // hello
"A"
"A".toLowerCase() // a
"ALTCAMPUS"
"ALTCAMPUS".toLowerCase() // altcampus
```
- `toLowerCase` If value in upperCase and we want convert the value into lowerCase we use lowerCase.


4. `trim`
- Return: value in string and space of that value is removed; 
- Example:
```js
let message = "     Hello World    ";
message.trim();
"Hello World"

let name = "   lovekush   ";
name.trim();
"lovekush"

let fruits = "  apple   ";
fruit.trim();
"apple"
```
- `trim` To remove the white space from start and the end 


5. `trimEnd`
- Return: The value in string and the space of end has been removed;
- Example:
```js
let message = "     Hello World    ";
message.trim();
"   Hello World"

let name = "   lovekush   ";
name.trim();
"   lovekush"

let fruits = "  apple   ";
fruit.trim();
"    apple" 
``` 
- `trimEnd`To remove the white space from the end ;


6. `trimStart`
- Return: The value in string and the space of Start has been removed;
- Example:
```js
let message = "     Hello World    ";
message.trim();
"Hello World   "

let name = "   lovekush   ";
name.trim();
"lovekush     "

let fruits = "  apple   ";
fruit.trim();
"apple   " 
``` 
- `trimStart`To remove the white space from the Start ; 


7. `concat`
- Parameter: you can pass multiple number of parameter in concate
- Return: returns the new string as an output 
- Example:
```js
const color = "green"
const message = "One of the color of our flage";
color.concat(" " , message) // green one of the color of our flage
const fruit = "color of the leaves" 
color.concat(" is " , fruit) // green is color of the leaves
color.concat("" , message)// greenOne of the color of our flage
- `concat` used for contaTing two or multiple storing value
```

8. `endsWith`
- Parameter: we can pass only one parameter;
- Return: true or false;
- Example:
```js
let title = "lady of winter fall";
title.endsWith("fall") // true

let character = "greet";
character.endsWith(T) // false because T is capital and javascript is case sensitive language

let firstName = "aryan";
firstName.endsWith(n) // true
- `endswith` return true or false based on whether that string endswith specific character, value or not
```
9. `includes`
- Parameter: we can pass only one parameter;
- Return: true or false;
- Example:
```js
let title = "lady of winter fall";
title.includes("fall") // true


let Name = "aryan";
firstName.includes(n) // true

let city = "Londen";
character.includes(T) // false 
```
- `includes` return true or false based on whether the value of the character is present inside that  string or not
10. `indexOf`
- Example:
```js
let name = "Arya"
name.indexOf("xyz") // -1

let tagline = "Everything you need to become a software doveloper"
tagline.indexOf("software") // 32
tagline.indexsOf("e") // 2
```
- `indexOf` indexOf return s the index of specific character or words that you looking for.


11. `lastIndexOf`
- Example:
```js
let tagline = "Everything you need to become a software doveloper"
tagline.lastIndexOf("e") // 48
tagline.lastIndexOf("you") // 11
tagline.lastIndexOf("becomes") // -1
```
- `lastIndexOf` does same thing that indexof does but it looks for last index of that specific value ,character or word;


12. `padEnd`
- Parameter: accepts two parameter
- Return: return new value 
- Example:
```js
let username = "Altcampus"
username.padend("20", "."); // "Altcampus...................."
"21".padend("5", "0") // "2100000"
username.padend("4", ".") // "Altcampus...."
```
-  `padEnd` This method are used to add some padding at the end  to string ;


13. `padStart` 
- Parameter: accepts two parameter
- Return: return new value 
- Example:
```js
let username = "Altcampus"
username.padStart("20", "."); // "....................Altcampus"
"21".padStart("5", "0") // "0000021"
username.padStart("4", ".") // "....Altcampus"
```
- `podStart`This method are used to add some padding at the start  to string;


14. `repeat`
- Return: new string after reapeting
- Example:
```js
let name = "lovekush"
name.repeat("4") // "lovekushlovekushlovekushlovekush"

let username = "Altcampus"
username.repeat("2") // "AltcampusAltcampus"

let color = "red"
color.repeat("3") // "redredred"
```
- `repeat` repeat in used for repeating the same strign multiple time 


15. `replace`
- Prameter: replace accept two parameter 1st is what do you want to replace. 2nd what do want as an result or output;
- Return: give the strign value aa a return;
- Example:
```js
let username = "Altcampus"
username.replace("campus", "school"); // "Altschool"

let city = "London"
city.replace("don", "e"); // "lone" 

let color = "red"
color.replace("d", "bbit"); // rebbit
```
- `replace`  it will replace a character or specific set of character from a string. 


16. `slice`
- Parameter: Accepts two parameter 
1st- start index and 
2nd- end index(optional one);
if you don`t pass 2nd parameter it will start from 0 and go till the end .
- Return: return new string
- Example:
```js
let tagline = "everything you need to become a software developer"
tagline.slice("0") // "everything you need to become a software developer"
tagline.slice("0", "20")// "everything you need"
tagline.slice("20", "0") // "" (not possible)
```
- `slice` extract a section of string;


17. `split`
- Parameter: accepts only one parameter 
- Return: return a new value as array
- Example:
```js
let tagline = "everything you need to become a software developer"
tagline.split("") // (50) ['e', 'v', 'e', 'r', 'y', 't', 'h', 'i', 'n', 'g', ' ', 'y', 'o', 'u', ' ', 'n', 'e', 'e', 'd', ' ', 't', 'o', ' ', 'b', 'e', 'c', 'o', 'm', 'e', ' ', 'a', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
tagline.split(" ") // (8) ['everything', 'you', 'need', 'to', 'become', 'a', 'software', 'developer']
tagline.split("   ") // ['everything you need to become a software developer']
```
- `split` split is used for splitting string into small chunks;


18. `substring`
- Parameter: it also accepts 2 parameter start and end;
- return: return a new string;
- Example:
```js
let tagline = "everything you need to become a software developer"
tagline.substring(21, 0) // "everything you need t"

tagline.substring("21", NaN) // "everything you need t" (because NaN is number data type and if you are passing NaN for substring NaN is considered to be zero(0))

let tagline = "everything you need to become a software developer"
tagline.substring(20, 0) // "everything you need"
```
- `substring` substring is used for taking out small portion from a string;
