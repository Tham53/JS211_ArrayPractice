// 1// .length
// Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
// Console.log the length of the array.
// Use node main.js to run the program.
//cars array (first array)
let cars = ['Ford', 'Honda', 'Mustang', 'Chevy']
console.log(cars.length)

// 2// .concat()
// Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
// Run the program.
//moreCars array (second array)
let moreCars = ['Audi', 'Toyota', 'Infinity', 'Honda']


//totalCars array (combined)
let totalCars = cars.concat(moreCars);
console.log("totalCars", totalCars)


// 3// .indexOf() and .lastIndexOf()
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
// Run the program.
console.log(moreCars.indexOf('Honda'))
console.log(moreCars.lastIndexOf('Ford'))


// 4// .join()
// Use the join method to covert the array totalCars into a string called stringOfCars.
// Run the program.
console.log(totalCars.join());




// 5// .split()
// Use the split method to convert stringOfCars back intro an array called totalCars.
// Run the program.
let totalCars1 = stringOfCars.split(" ");



// 6// .reverse()
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
// Run the program.
console.log(totalCars1.reverse());
var carsInReverse = totalCars1



// 7// .sort()
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
//   alert(carsInReverse.indexOf('yourPrediction'));
// Run the program.
totalCars.sort()



// 8// .slice()
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removedCars = totalCars.slice(2,4)



// 9// .splice()
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse



// 10// .push()
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse



// 11// .pop()
// Use the pop method to remove and console.log the last item in the array carsInReverse.
carsInReverse



// 12// .shift()
// Use the shift method to remove and console.log the first item in the array carsInReverse.
carsInReverse



// 13// .unshift()
// Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse



// 14// .forEach()
// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

