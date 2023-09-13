let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Max";
// userName = userInput;

if (typeof userInput == "string") {
  //추가적인 타입 검사 필요
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }; //never return
}

const result = generateError("An error occurred!", 500);
console.log(result);
