"use strict";

let js = "amazing";
if (js === "amazing") alert("Javascript is fun");

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can Drive!");

// functions

function longer() {
  console.log("I am function");
}

longer();

function fruitJuicer(plums, apples) {
  return ` Juice with ${apples} apples and ${plums} plums`;
}

const juice = fruitJuicer(5, 1);
console.log(juice);

// functions expression ( antonymous function)
const juice2 = function (plums, apples) {
  return ` Juice with ${apples} apples and ${plums} plums`;
};
console.log(juice2);

const currentYear = new Date().getFullYear();

// arrow functions
const calculateAge = (birthday) => currentYear - birthday;
const age = calculateAge(1996);
console.log(age);

const retAge = 65;
const retirementAge = (birthday, firstName) => {
  const age = currentYear - birthday;
  const retirement = retAge - age;
  return `${firstName} will retires in ${retirement} years`;
};

console.log(retirementAge(1996, "Kate"));
console.log(retirementAge(1998, "Indu"));

// Function that call another function

function fruitCutter(fruits) {
  return fruits * 4;
}

function fruitJuc(plums, apples) {
  const plumPieces = fruitCutter(plums);
  const applesPieces = fruitCutter(apples);
  return ` Juice with ${applesPieces} apples pieces and ${plumPieces} plums pieces`;
}

const juiceMix = fruitJuc(2, 3);
console.log(juiceMix);

// functions that calculate one action

const calculatePersonAge = function (birthdayYear) {
  return currentYear - birthdayYear;
};

const retirementYear = function (birthday, firstName) {
  const age = calculatePersonAge(birthday);
  const retirement = retAge - age;

  if (retirement > 0) {
    return `${firstName} will retires in ${retirement} years`;
  } else {
    return `${firstName} is already retired 🍀`;
  }
};

console.log(retirementYear(1991, "Bob"));
console.log(retirementYear(1950, "Jane"));

// print an array
const printArray = function (array) {
  for (let element of array) {
    console.log(element);
  }
};

printArray([1, 4, 8, 10, 4]);

// arrow function to sum elements of array
const sum = (array) => {
  let sumNum = 0;
  for (let element of array) {
    sumNum += element;
  }
  return sumNum;
};

console.log(sum([1, 4, 8, 10, 4]));

/////////////// Coding Challenge #1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function 'calcAverage' to calculate the average of 3 scores without use of array
const calcAverage1 = (firstNum, secondNum, thirdNum) => {
  (firstNum + secondNum + thirdNum) / 3;
};

//arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (dolphinsScore, koalasScore) => {
  let avgScoreDolphin = 0;
  let avgScoreKoalas = 0;
  for (let score of dolphinsScore) {
    avgScoreDolphin += score / 3;
  }
  for (let score of koalasScore) {
    avgScoreKoalas += score / 3;
  }
  return [Math.round(avgScoreDolphin), Math.round(avgScoreKoalas)];
};

//function 'checkWinner' that takes the average score of each team as parameters, and then logs the winner to the console
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas} 🏆`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins} 🏆`);
  } else {
    console.log("No one wins 😢");
  }
};

let averageValues1 = calcAverage([44, 23, 71], [65, 54, 49]);
let averageValues2 = calcAverage([85, 54, 41], [23, 34, 27]);
checkWinner(averageValues1[0], averageValues1[1]);
checkWinner(averageValues2[0], averageValues2[1]);

let a = 2;
let b = 2;
console.log("2 =", a);

const calcTempAmplitude = function (temp) {
  let maxTemp = temp[0];
  let minTemp = temp[0];

  for (let i = 1; i < temp.length; i++) {
    const currentTemp = temp[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  return maxTemp - minTemp;
};
const amplitude = calcTempAmplitude(["4", 7, 8, 2, 1, "5", 3]);
console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees Celsius"),
  };

  console.log(measurement);
  console.table(measurement);
};
measureKelvin();
