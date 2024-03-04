// oggetto è una colezzine di propietà

/* const person1 = {
  firstName: "Pasha",
  lastName: "Pastushenko",
  age: 20,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi! im Pasha");
  },
  eat: function () {
    console.log("Hi! i usually eat pizza");
  },
};

const person2 = {
  firstName: "Antonio",
  lastName: "Pyton",
  age: 25,
  isEmployed: false,
  sayHello: () => console.log("Hi! im Patrick..."),
  eat: () => {
    console.log("Hi! i usually eat pizza and sushi");
  },
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
 */
//this referenza al oggetto dove this è usato
/* 

const person3 = {
  name1: "Spangebob",
  favFood: "Hamburgher",
  sayHello: () => {
    console.log(`${name1}`);
  },
};

const person4 = {
  name1: "Patrick",
  favFood: "Sushi",
  sayHello: function () {
    console.log(`${this.name1}`);
  },
};

person4.sayHello();
 */

//constructor

/* function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

console.log(car1.make);
 */

//class

/* class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){

        console.log(`Product: ${this.price}`)
    }
}

 */

// static

/* class MathUnit{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircum(radius){
        return radius * 2 * this.PI;
    }
    static getArea(radius){
        return radius * radius * this.PI;
    }

}

console.log(MathUnit.PI);
console.log(MathUnit.getDiameter(10)); */

/* class User {

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("SpongeBob");
console.log(user1.username);
console.log(user1.userCount); */

// Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni
// oggetto utente con i seguenti attributi:- firstName- lastName- age- location Aggiungi alla classe User anche un
// metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date due istanze della classe utente
// “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio
//  di y” a seconda del risultato del confronto.
// Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  paragone = function (utente2) {
    if (this.age > utente2.age) {
      console.log(`${this.firstName} è più grande di ${utente2.firstName}`);
    } else if (this.age < utente2.age) {
      console.log(`${this.firstName} è più piccolo di ${utente2.firstName}`);
    } else {
      console.log(
        `${this.firstName} ha gli stessi anni di ${utente2.firstNameName}`
      );
    }
  };
}

const user1 = new User("Pasha", "Pastushenko", 20, "Mestre");
const user2 = new User("Antonio", "Pyton", 24, "Napoli");
const user3 = new User("Francesco", "Naccari", 10, "Sicilia");
const user4 = new User("Fabio", "Brogi", 18, "Olanda");

user4.paragone(user4);

//Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species // (cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  controllo = function (pet2) {
    if (this.ownerName === pet2.ownerName) {
      let padrone = true;
      console.log(padrone);
      console.log(
        `Il ${this.species} che si chiama ${this.petName} ha lo stesso propietario ${this.ownerName} del ${pet2.species} chiamato ${pet2.petName}`
      );
    } else {
      let padrone = false;
      console.log(
        `Il ${this.species} che si chiama ${this.petName} non ha lo stesso propietario ${this.ownerName} del ${pet2.species} chiamato ${pet2.petName}, il propietario di ${pet2.petName} è ${pet2.ownerName}`
      );
    }
  };
}

const animale1 = new Pet("Alur", "Pasha", "Cane", "CineseKrested");
const animale2 = new Pet("Isabella", "Fabio", "Uccello", "Calopside");
const animale3 = new Pet("Mia", "Pasha", "Cane", "Chiuhuahua");
const animale4 = new Pet("Alexa", "Antonio", "Serpente", "Pytone");

animale1.controllo(animale3);

const animali = [];

const invia = document.getElementById("invia");
const form = document.getElementById("form");

invia.addEventListener("click", function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    return;
  }
  const petName = document.getElementById("petName");
  const ownerName = document.getElementById("ownerName");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");

  const pet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );
  animali.push(pet);

  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";

  generaLista();
});

function generaLista() {
  const tabella = document.getElementById("tabella");
  tabella.innerHTML = "";
  animali.forEach((element) => {
    const riga = document.createElement("tr");
    const petName = document.createElement("th");
    const ownerName = document.createElement("th");
    const species = document.createElement("th");
    const breed = document.createElement("th");
    petName.innerText = element.petName;
    ownerName.innerText = element.ownerName;
    species.innerText = element.species;
    breed.innerText = element.breed;
    riga.append(petName, ownerName, species, breed);
    tabella.appendChild(riga);
  });
}
