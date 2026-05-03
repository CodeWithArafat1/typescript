const createWithGeneric = <T>(value: T) => [value];

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createObject = (value: { id: number; name: string; age: number }) => {
//   return [value];
// };

const numberArray = createWithGeneric(222);
const stringArray = createWithGeneric("Apple");
const objectArray = createWithGeneric({ id: 1, name: "Arafat", age: 21 });

//* Tuple

const createTupleWithGereic = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res1 = createTupleWithGereic(2, 4);
const res2 = createTupleWithGereic(2, { name: "Arafat" });

const studentToCourse = <T extends { name: string; id: number }>(
  studentInfo: T,
) => {
  return {
    courseName: "Next level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Arafat",
  isMarried: false,
};

const student2 = {
  hasWatch: true,
};

const student = studentToCourse(student1);
