var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = "Max";
var age = 30;
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
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
console.log(add(2, 5));
var printOutput = function (output) {
    console.log(output);
};
printOutput(add(5));
var button = document.querySelector("button");
if (button) {
    button.addEventListener("click", function (event) {
        console.log(event);
    });
}
var hobbies = ["Sports", "Cooking"];
var activeHobbies = ["Hiking"];
// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(hobbies[0]);
var person = {
    name1: "Max",
    age1: 30,
};
var copiedPerson = __assign({}, person);
var add1 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add1(5, 10, 2, 3.7);
console.log(addedNumbers);
// const hobby1 = hobbies[0];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var firstName = person.name1, curAge = person.age1;
console.log(firstName, curAge);
