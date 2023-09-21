const names = ["Max", "Manuel"];

const array: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Max" }, { age: 30 }));

const mergedObj = merge({ name: "Max" }, { age: 30 });

console.log(mergedObj.age);

interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = "Got" + element.length + " elements.";
  } else if (element.length > 1) {
    descriptionText = "Got" + element.length + "elements";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hi, there!!"));
console.log(countAndPrint(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value:" + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

const ObjectStorage = new DataStorage<object>();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// function createCourseGoal(title: string, description: string, date: Date) {
//   return { title: title, description: description, completeUntil: date };

// }

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;

  return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ["Max", "Sports"];
// names2.push('Manu');
