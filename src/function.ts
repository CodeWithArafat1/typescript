//* TS: function

//? abnormal function
function add(a: number, b: number) {
  return a + b;
}

const amount = add(2, 4);

//? arrow function
const addArrow = (a: number, b: number) => {
  return a + b;
};

addArrow(3, 8);

//* object

const porUser = {
  name: "Arafat",
  balance: 0,

  addBalance(value: number): number {
    return (this.balance += value);
  },
};

porUser.addBalance(100000);

const arr: number[] = [1, 2, 3, 4];

const sqrArr = arr.map((ele: number): number => {
  return ele * ele;
});
