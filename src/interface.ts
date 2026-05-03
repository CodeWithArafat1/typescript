//* TS: Interface

type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Arafat",
  age: 22,
  role: "admin",
};

const user2: UserWithRole = {
  name: "Isha",
  age: 19,
  role: "user",
};

interface IAdd {
  (a: number, b: number): number;
}

const add: IAdd = (a, b) => a + b;

type Arr = string[];

interface IArr {
  [index: number]: string;
}
const arr: IArr = ["A", "B", "C"];
