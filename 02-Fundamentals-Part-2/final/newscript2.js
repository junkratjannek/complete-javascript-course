"use strict";

function logger() {
  console.log("My Name is Jannek");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(1, 2);
console.log(appleJuice);

// Function expression

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge(2000);
console.log(age2);

const calcAge2 = (birthYear) => 2024 - birthYear;

const age3 = calcAge2(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, fistName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${fistName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "jannek"));

const returnBirthYear = (age, firstName) => {
  console.log(yearsUntilRetirement(2004, "JanneK"));
  return `My name is ${firstName} and I am ${age} old`;
};

console.log(returnBirthYear(19, "Jonas"));

function cutFruitPices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPices(apples);
  const orangePieces = cutFruitPices(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(1, 2));

const Jannek = {
  firstName: "Jannek",
  lastName: "Nachname",
  friends: ["Hemmy", "Lukas", "Jonas"],
  hasDriversLicense: true,
  born: 2004,
  job: "student",

  // we need an expression here 
  // calcAge3: function (born) {
  //   return 2024 - born; 
  // }

  calcAge3: function () {
    console.log(this) 
    this.age =  2024 - this.born; 
    return this.age; 
  },

  checkForDriversLicense: function () {
    if (this.hasDriversLicense){
      return "a"; 
    }
    else {
      return "no"; 
    }
  }, 

  getSummary: function () {
    // let summary = `${this.firstName} is a ${this.calcAge3()}-old ${this.job} and he has ${this.checkForDriversLicense()} driver's license`;
    let summary = `${this.firstName} is a ${this.calcAge3()}-old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;  
    console.log(summary);
  }
};

console.log(Jannek.firstName);
console.log(Jannek["firstName"]);

const nameKey = "Name";
console.log(Jannek["last" + nameKey]);
console.log(Jannek.lastName);
console.log(Jannek["lastName"]);

// const interestedIn = prompt(
  //   "What do you want to know about Jannek? Choose between firstName and lastName and friends"
  // );
  // console.log(Jannek[interestedIn])
  
let friends = Jannek["friends"];
let bestFriend = Jannek["friends"][0];

const friendData = `${Jannek['friends'][0]} is Jannek's bestfriend and his friends are: ${Jannek['friends']}`; 
console.log(friendData)

console.log(Jannek.calcAge3())

// console.log(`${Jannek.firstName} is a ${Jannek.calcAge3()}-old ${Jannek.job} and he has ${Jannek.checkForDriversLicense()} driver's license`)
Jannek.getSummary();