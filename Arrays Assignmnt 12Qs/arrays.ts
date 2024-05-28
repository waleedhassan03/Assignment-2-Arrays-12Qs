// Assignmenmt Of Array
// Question 1
// Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".

let fruits: string[] = ["Apple", "Banana", "Mango", "cherry"];  //simple array carries only string 
console.log(fruits);


// Question 2
// Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.

let numbers: number[] = [10, 20, 30, 40];  //simple array carries only numbers
console.log(numbers);



// Question 3
// Access the third element of the fruits array and assign it to a variable named thirdFruit.

let thirdFruit = fruits[2]; //accessing by indexing which starts from 0,1,2,3...
console.log(thirdFruit);



// Question 4
// Change the second element of the numbers array to 25.
 numbers[1] = 25;     //accessing second element and assigning 25 in that place
 console.log(numbers);



// Question 5
// Add the element "grape" to the end of the fruits array using the method.

fruits.push("Grapes");   // by using Push Method: we can add elements add the end of arrays
console.log(fruits);



// Question 6
// Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.

let lastFruit = fruits.pop(); //by using pop method: we can remove last elements from arrays and return it 
console.log(lastFruit) ;


// Question 7
// Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.

let firstFruit = fruits.shift(); //by using shift method: we can remove elements from the beginning of arrays and return it.
console.log(firstFruit);



// Question 8
// Add the element "kiwi" to the beginning of the fruits array using the method.

fruits.unshift("kiwi");   //by unshift method: we can add elements at the beginnig of arrays
console.log(fruits);


// Question 9
// Remove 2 elements from the fruits array starting from index 1 using the method.

fruits.splice(1,2)   // by splice method: here we reomove 2 elements from index 1
console.log(fruits)


// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 0 , "pineapple", "pear")  // again adding 2 elements by splice method from index 2

console.log(fruits)



// Question 11
// Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let citrusFruits = fruits.slice(0 , 2);   // slice method is used to choose elements from original array by using indexes from Start and End 
console.log(citrusFruits)



// Question 12
// Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

let lastTwoFruits = fruits.slice(-2)   // here -2 means starting from the second last element to onwards
console.log(lastTwoFruits)



