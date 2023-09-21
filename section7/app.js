var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ["Max", "Manuel"];
var array = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This is done!");
    }, 2000);
});
promise.then(function (data) {
    data.split(" ");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// console.log(merge({ name: "Max" }, { age: 30 }));
var mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);
function countAndPrint(element) {
    var descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = "Got" + element.length + " elements.";
    }
    else if (element.length > 1) {
        descriptionText = "Got" + element.length + "elements";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hi, there!!"));
console.log(countAndPrint(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value:" + obj[key];
}
extractAndConvert({ name: "Max" }, "name");
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
var numberStorage = new DataStorage();
var ObjectStorage = new DataStorage();
// function createCourseGoal(title: string, description: string, date: Date) {
//   return { title: title, description: description, completeUntil: date };
// }
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    return courseGoal;
}
var names2 = ["Max", "Sports"];
// names2.push('Manu');
