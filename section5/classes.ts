class Department {
  //   public name: string;
  public employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
    console.log(Department.fiscalYear);
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  private static instance: ITDepartment;
  private constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  static getInstance() {
    if (ITDepartment.instance) {
      return ITDepartment.instance;
    }
    this.instance = new ITDepartment("d2", ["Max"]);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  describe() {
    console.log("Accounting Department - ID :", +this.id);
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private report: string[]) {
    super(id, "Accounting");
    this.lastReport = report[0];
  }

  addReport(text: string) {
    this.report.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.report);
  }

  addEmployee(name: string) {
    if (name == "Max") {
      return;
    }

    this.employees.push(name);
  }
}

const accounting = new Department("d1", "Accounting");
console.log(accounting);

accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

accounting.employees[2] = "Anna";
accounting.describe();

// const ITAccounting = new ITDepartment("d1", ["Max"]);
const IT = ITDepartment.getInstance();
console.log(IT);
const reportaccounting = new AccountingDepartment("d2", []);
reportaccounting.describe();

reportaccounting.addReport("Something went wrong...");

reportaccounting.printReport();

reportaccounting.addEmployee("Max");
reportaccounting.addEmployee("Manu");

reportaccounting.mostRecentReport = ";";
// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();

const employee1 = Department.createEmployee("Max");
console.log(employee1);

//abstract method -> 상속받은 추상멤버 함수는 구현해야 함
//private cunstructor 생성자  클래스 인스턴스 사용 불가 -> static 메서드 사용
