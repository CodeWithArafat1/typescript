"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let something;
something = "Arafat";
something.toUpperCase();
const gramToKGConvater = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Convated output is ${Number(value) * 1000}`;
    }
    else {
        return "Invalid Input";
    }
};
const result1 = gramToKGConvater(2);
console.log({ result1 });
const result2 = gramToKGConvater("1 KG");
console.log({ result2 });
const result3 = gramToKGConvater(undefined);
console.log({ result3 });
try {
}
catch (error) {
    console.log(error.message);
}
//# sourceMappingURL=typescriptAssertion.js.map