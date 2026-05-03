"use strict";
//* TS: function
Object.defineProperty(exports, "__esModule", { value: true });
//? abnormal function
function add(a, b) {
    return a + b;
}
const amount = add(2, 4);
//? arrow function
const addArrow = (a, b) => {
    return a + b;
};
addArrow(3, 8);
//* object
const porUser = {
    name: "Arafat",
    balance: 0,
    addBalance(value) {
        return (this.balance += value);
    },
};
porUser.addBalance(100000);
const arr = [1, 2, 3, 4];
const sqrArr = arr.map((ele) => {
    return ele * ele;
});
//# sourceMappingURL=function.js.map