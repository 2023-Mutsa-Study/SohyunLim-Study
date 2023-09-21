type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 == "string" || typeof n2 == "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "Myown company" },
};

console.log(fetchedUserData?.job?.title); //chaining

const userInput = null;

const storedData = userInput || "DEFAULT";

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("start date:" + emp.startDate);
  }
}

printEmployeeInfo(el);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  //   if ("flyingSpeed" in animal) {
  //     console.log("Moving with speed" + animal.flyingSpeed);
  //   }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }

  console.log("Moving at speed" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const paragraph = <HTMLInputElement>document.querySelector("p");

paragraph.value = "Hi there";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  1: "Not a valid email",
  username: "Must start with a capital character",
};

const result = add(1, 5);
