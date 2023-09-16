const userName = "Max";
let age = 30;

// function add(a: number, b: number) {
//   var result; //함수 안에서만 작동
//   result = a + b;
//   return result;
// }

if (age > 20) {
  var isOld = true;
}

// console.log(isOld); //var -> ts에서만 에러

// const add = function() {

// }

// const add = (a: number, b: number) => {
//   return a + b;
// };

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

const printOutput = (output: string | number) => {
  console.log(output);
};

printOutput(add(5));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log(hobbies[0]);

const person = {
  name1: "Max",
  age1: 30,
};

const copiedPerson = { ...person };

const add1 = (...numbers: number[]) => {
  let result = 0;

  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add1(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { name1: firstName, age1: curAge } = person;

console.log(firstName, curAge);
