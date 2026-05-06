type Alphanewmaric = number | string;

const add = (num1: Alphanewmaric, num2: Alphanewmaric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return num1.toString() + num2.toString();
};

add(2, 3);
add("4", 5);
add(4, "5");

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

type UserWithRole = NormalUser | AdminUser;

const getUserInfo = (user: UserWithRole) => {
  if ("role" in user) {
    console.log(`${user.name} and this role is ${user.role}`);
  } else {
      console.log(`${user.name}`);
  }
};

getUserInfo({ name: "Arafat Nill"});
