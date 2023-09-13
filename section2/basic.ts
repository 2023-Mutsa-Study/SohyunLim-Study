function add(n1: number, n2: number, show: boolean, phrase: string) {
  console.log(typeof n1);

  if (typeof n1 != "number" || typeof n2 != "number") {
    throw new Error("Incorrect Input!");
  }
  const result = n1 + n2; //타입 추론 내장기능 활용

  if (show) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
let number1: number;
number1 = 7;
const number2 = 2.8;
const printResult = true;
const phrase = "The result is :";

const result = add(number1, number2, printResult, phrase); //type이 안맞으면 안맞다고 에러메세지를 띄움
