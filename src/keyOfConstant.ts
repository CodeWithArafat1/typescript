type RichPeopleVechel = {
  car: string;
  bike: string;
  cng: string;
};

type MyVechel1 = "car" | "bike" | "cng";

type MyVechel2 = keyof RichPeopleVechel;

const myVechel: MyVechel2 = "bike";

const user: {
  name: string;
  age: number;
  address: {
    city: string;
    phone: string;
  };
} = {
  name: "Arafat",
  age: 22,
  address: {
    city: "Rajshahi",
    phone: "01772162533",
  },
};

const getPopartyFromObject = (obj: object, key: string) => {
  return obj[key];
};
