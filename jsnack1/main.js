// Inizializing array and sum of its elements.

const arrayNumbers = [];
let sumOfNumbers = 0;

// Visualizing array and sum of its elements after inizialization.

console.log(arrayNumbers);
console.log(sumOfNumbers);

/* Do...while cycle asks numbers to user, adds it to 
"arrayNumbers" and sums it to "sumOfNumbers", while 
"sumOfNumbers" < 50 */

do {

    let userInput = prompt("Please insert number smaller than 50");
    let number = parseInt(userInput);

    /* While loop to check initial number no greater than 50 
    (not necessary for excercise but whatever) */

    while (number >= 50) {

        userInput = prompt("Inserted number is greater than 50. Please insert number");
        number = parseInt(userInput);
    }

    arrayNumbers.push(number);

    sumOfNumbers += number;

} while (sumOfNumbers < 50);

// Visualizing array and sum of its elements after end of cycle.

console.log(arrayNumbers);
console.log(sumOfNumbers);