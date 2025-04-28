// Datatypes
//primitive:

//  string, number, boolean
// let = kan bytte verdi
// const = kan ikke bytte verdi
// var = utdatert let eller const

let userName = "Eivind";
console.log(userName);
userName = "nyttnavnredeklarert"
console.log(userName);
console.log(typeof userName);

let userAge = 46;
console.log(userAge);
console.log(typeof userAge);

let isPresent = true;
console.log(isPresent);
console.log(typeof isPresent);

const firstName = "Eivind";
// firstName = "julius"; -- kan ikke sette nytt navn på konst
console.log(firstName);

const lastName = "Berge";

// variable chaining med +
let fullName = firstName + " " + lastName + "!";
console.log(fullName);

//template litteral
fullName = `${firstName} ${lastName}!!`;
console.log(fullName);

const num1 = "10";
const num2 = "10";
const sum = num1 + num2;
console.log(sum);
console.log(typeof sum);

//non-primitive datatypes
// function = en blokk med kode som kjøre samtidig
// array = en liste av data
// object = key:value liste av data

function businessCard() {
    // local scope kun i funksjonen
    console.log("Hei fra inni en funksjon");
    let navn = "Eivind";
    let firstName = "Eivind";
    let lastName = "Berge";
    const tittel = "student";
    console.log(`${firstName} ${lastName}, ${tittel}.`)
    const main = document.querySelector("main");
    main.textContent = `${firstName} ${lastName}, ${tittel}.`;
}

businessCard();