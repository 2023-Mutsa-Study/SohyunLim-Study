function add(n1, n2, show, phrase) {
    console.log(typeof n1);
    if (typeof n1 != "number" || typeof n2 != "number") {
        throw new Error("Incorrect Input!");
    }
    var result = n1 + n2; //타입 추론 내장기능 활용
    if (show) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 7;
var number2 = 2.8;
var printResult = true;
var phrase = "The result is :";
var result = add(number1, number2, printResult, phrase); //type이 안맞으면 안맞다고 에러메세지를 띄움
