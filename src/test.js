const createArrayWithString = (value) => [value];

const createArrayWithNumber = (...value) => value;

const numberArray = createArrayWithNumber(2,4,5,6,7,8);

console.log(numberArray);
