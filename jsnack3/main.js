// Variable for our array with other arrays as elements

const arrayOfArrays = [];

/* Prompt asks our user how many 
arrays to put inside "arrayOfArrays" */

const numberOfArrays = prompt("Chose a number of arrays to create");

// Converts imput value into a number

parseInt(numberOfArrays);

/* First "for" cycle creates "i" arrays, "i" being the value 
obtained by the above prompt command, then pushes each iteration 
into "arrayOfArrays" */

for (i = 0; i < numberOfArrays; i++) {

    const createdArray = [];

    /* Second "for" cycle creates 10 elements in each "createdArray" 
    using the math.floor-math.random method combo. Each element 
    is a number >= 1 && < 100*/

    for (k = 0; k < 10; k++) {

        createdArray[k] = (Math.floor(Math.random() * 100) + 1);

    }

    arrayOfArrays.push(createdArray);

}

// Output of arrayOfArrays

console.log(arrayOfArrays);