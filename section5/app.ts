//interface
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// type AddFn = (a:number, b:number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Greetable extends Named {
  greet(phrase: string): void;
}

interface Named {
  readonly name: string;
  outputName?: string;
}

class Person implements Greetable {
  name: string;

  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// let user1: Person;

// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + "" + this.name);
//   },
// };
let user1: Greetable;

user1 = new Person("Max");
user1.greet("Hi there - I am");
console.log(user1);
