class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfSleep: number) {
    console.log(`${this.name} eni ${numOfSleep} gonta gumai`);
  }
}

class Student extends Parent {}

class Techer extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numberOfHours: number) {
    console.log(`${this.name} eni ${numberOfHours} gonta class nei`);
  }
}

const techer1 = new Techer("Mr. X", 30, "Rajshahi", "techer");

techer1.takeClass(5);
techer1.getSleep(19);
