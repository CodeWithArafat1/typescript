let something: any;

something = "Arafat";
(something as string).toUpperCase();

const gramToKGConvater = (
  input: number | string | undefined,
): number | string | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Convated output is ${Number(value) * 1000}`;
  } else {
    return "Invalid Input";
  }
};

const result1 = gramToKGConvater(2) as number;
console.log({ result1 });

const result2 = gramToKGConvater("1 KG") as string;
console.log({ result2 });

const result3 = gramToKGConvater(undefined) as undefined;
console.log({ result3 });

type CustomError = {
    message: string
}

try {
    
} catch (error) {
    console.log((error as CustomError).message)
}