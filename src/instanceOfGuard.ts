class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} she ${numOfHours} gonta gumai`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} she ${numOfHours} gonta pore`);
  }
}

class Techer extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} she ${numOfClass} class nei`);
  }
}

//* function guard
const isStudent = (user: Person) => user instanceof Student;
const isTecher = (user: Person) => user instanceof Techer;

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTecher(user)) {
    user.takeClass(2);
  } else {
    user.getSleep(16);
  }
};

const student1 = new Student("Arafat");
const techer1 = new Techer("Mr. X");

getUserInfo(student1);
getUserInfo(techer1);
