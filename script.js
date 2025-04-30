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

//
console.log("--------------------------------------------------");
//

function businessCard() {

    //variabler som henter element øverst

    const h2Title = document.getElementById("title");
    console.log(h2Title);
    const pDescription = document.querySelector("#description")
    console.log(pDescription);
    const imgImage = document.querySelector("#image");
    console.log(imgImage);

    //variabler som lagrer data i midten

    // local scope kun i funksjonen
    console.log("Hei fra inni en funksjon");
    let navn = "Eivind";
    let firstName = "Eivind";
    let lastName = "Berge";
    const fullName = firstName + " " + lastName;
    console.log(fullName);

    const description = "student";
    const image = "https://images.unsplash.com/photo-1745905932716-431e50eac74b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    console.log(`${firstName} ${lastName}, ${description}.`)
   // const main = document.querySelector("main");
   // main.textContent = `${firstName} ${lastName}, ${description}.`;
    
    //Manipulerer variablene sammen (HMS)

    h2Title.textContent = fullName;
    pDescription.textContent = description;
    imgImage.src = image;
    imgImage.alt = "Random pic from Unsplash";
    imgImage.style.width = "100%";
    //klassenavn i steden for inlinestyling: imgImage.classList.add = "businessCardImage"


}



//businessCard();

const button = document.querySelector("#button");
console.log(button);
button.addEventListener("click", businessCard);

//shift contr L - multiple cursor cursor cursor