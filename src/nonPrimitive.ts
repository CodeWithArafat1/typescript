//* TS: array, object

//? array
const arr: string[] = ["Arafat", "Nusrat", "Sultana", "Isha"];

//? object
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isMarried?: boolean; //* ? optional
} = {
  firstName: "Arafat",
  lastName: "Nill",
  age: 22,
  isMarried: false,
};

//? tuple
const details: [string, string] = ["Husband", "Wife"];

