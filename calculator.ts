type Operation = "multiply" | "add" | "divide";
type Result = number | string;
const operations = ["multiply", "add", "divide"];

// const calculator = (a: number, b: number, op: string) => {
// ! o
// const calculator = (
//     a: number,
//     b: number,
//     op: "multiply" | "add" | "divide"
// ) => {
const calculator = (a: number, b: number, op: Operation): Result => {
    if (!operations.includes(op)) {
        return "This operation is not defined";
    }

    if (op == "multiply") return a * b;
    if (op == "add") return a + b;
    if (op == "divide") {
        if (b == 0) {
            return "No se puede dividir, MATH ERROR";
        }
        return a / b;
    }

    throw new Error("Operation is not valid");
};

console.log(calculator(2, 0, "divide"));
console.log(calculator(2, 1, "add"));
console.log(calculator(2, 1, "multiply"));
// console.log(calculator(2, 0, "aaaa"));

const operation = async () =>
    await fetch("minu.dev/get-operation-calculator")
        .then((res) => res.json())
        .then((res) => {
            return res;
        });

console.log(calculator(2, 1, "add"));
