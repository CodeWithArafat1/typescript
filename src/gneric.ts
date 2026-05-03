//* Dynamicaly Generalize

type GenericArr<T> = Array<T>;

const friends: GenericArr<string> = ["Mr X", "Mr Y", "Mr Z"];

const rollNumber: GenericArr<number> = [1, 4, 6];

const isElegibleList: GenericArr<boolean> = [true, false, true];

type User = { name: string; age: number };

const ArrOfObj: GenericArr<User> = [
  {
    name: "Arafat",
    age: 22,
  },
  {
    name: "Isha",
    age: 19,
  },
];
