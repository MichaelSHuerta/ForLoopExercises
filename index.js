/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let a = 0; a < 21; a++){
console.log(a) };

for (let b = 3; b < 31; b= b+2){
console.log(b) };

for (let c = 12; c > -16; c= c - 2) {
  console.log(c) };

for (let d= 50; d> 17; d = d-3){
  console.log(d) };








// Exercise #2: 
// Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

let name ="LaunchCode"
let facts = [1, 5, 'LC101', 'blue', 42]

// Construct ``for`` loops to accomplish the following tasks:
//   a. Print each element of the array to a new line.
//   b. Print each character of the string - in reverse order - to a new line. 

for (let e = 0; e < facts.length; e++ ) {
  console.log(facts[e])} ;

let reversed = "";
for (let f = 0; f < name.length; f++) {
   reversed = name[f] + reversed;}






// Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

//   a. One array contains the even numbers, and the other holds the odds.

let original = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let even = []
let odd = []


//   b. Print the arrays to confirm the results.
for (let i = 2; i < original.length; i = i + 2){

  console.log(original[i])
}
