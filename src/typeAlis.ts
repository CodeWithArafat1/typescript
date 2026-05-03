type User = {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  address: {
    city: string;
    division: string;
  };

  phone: string;
  gender: "male" | "female";
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Arafat",
    lastName: "Nill",
  },

  address: {
    city: "Rajshahi",
    division: "Rajshahi",
  },
  phone: "018830934892",
  gender: "male",
};

const user2: User = {
  id: 12,
  name: {
    firstName: "Nusrat",
    middleName: "Sultana",
    lastName: "Isha",
  },

  address: {
    city: "Chattogram",
    division: "Chattogram",
  },
  phone: "018830934892",
  gender: "female",
};

//* TS: Function Alis

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
