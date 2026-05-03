"use strict";
//* TS: nullable
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }
    else {
        console.log("From DB All Users");
    }
};
// getUser()
//* get discount
const calcluteDiscount = (input) => {
    if (typeof input === "number") {
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    }
    else if (typeof input === "string") {
        const [splittedPrice] = input.split(" ");
        console.log(splittedPrice * 0.1);
    }
};
calcluteDiscount(100);
calcluteDiscount("100 TK");
calcluteDiscount(null);
//# sourceMappingURL=nullable.js.map