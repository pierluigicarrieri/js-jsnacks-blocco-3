// Defining array and variables for html elements

const arrayNumbers = [];
const oddIndexContainerElement = document.getElementById("odd_index_container");
const evenIndexContainerElement = document.getElementById("even_index_container");
const oddContainerElement = document.getElementById("odd_container");
const evenContainerElement = document.getElementById("even_container")

// For cycle inizializes arrayNumbers with random numbers >= 0 && < 10

for (i = 0; i < 20; i++) {

    let arrayElement = (Math.floor(Math.random() * 11));

    arrayNumbers.push(arrayElement);

}

console.log(arrayNumbers);

/* For cycle puts odd INDEX numbers in red box and 
even INDEX numbers in green box */ 

for (i = 0; i < arrayNumbers.length; i++) {

    if (i % 2 === 0) {

        oddIndexContainerElement.innerHTML += arrayNumbers[i] + " . ";

    } else {

        evenIndexContainerElement.innerHTML += arrayNumbers[i] + " . ";

    }

}

/* For cycle puts ODD numbers in red box and 
EVEN numbers in green box */ 

for (i = 0; i < arrayNumbers.length; i++) {

    if (arrayNumbers[i] % 2 !== 0) {

        oddContainerElement.innerHTML += arrayNumbers[i] + " . ";

    } else {

        evenContainerElement.innerHTML += arrayNumbers[i] + " . ";

    }

}

