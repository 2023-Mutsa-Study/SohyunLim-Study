// const userName = "Max";
// console.log(userName);
//tsc app.ts --watch
const button = document.querySelector("button")!;
let appId = "abc";
// button.addEventListener("click", () => {
//   console.log("Clicked!");
// });

function clickHandler(message: string, age: number) {
  //   let userName = "Max";
  console.log("Clicked!" + message);
}

if (button) {
  //   button.addEventListener("click", () => {
  //     console.log("Clicked!");
  //   });
  button.addEventListener("click", clickHandler.bind(null, "button", 20)); //null로 해도 통과
}
