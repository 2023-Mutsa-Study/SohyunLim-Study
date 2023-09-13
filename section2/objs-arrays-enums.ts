// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

// var person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple type, 두 개의 요소만 있는 배열로 입력해야 함
//   roles : number;
// }

var person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], //union type, 명시적으로 재정의
  roles: Role.ADMIN,
};

person.role.push("admin"); //튜플에서 예외적으로 허용 푸시만 허용
// person.role[1] = 10;

person.role = [0, "admin"];

let favoriteActivities: string[]; //any는 자주 사용해서는 안됨
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  //문자열의 배열이라고 인식
  console.log(hobby.toUpperCase());
  // console.log(hobby.localeCompare())
}

if (person.roles === 5) {
  console.log("Is admin");
}
