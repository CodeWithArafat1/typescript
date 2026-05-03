//* TS: nullable

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB All Users");
  }
};

// getUser()

//* get discount

const calcluteDiscount = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [splittedPrice] = input.split(" ");
    console.log(splittedPrice * 0.1);
  }
};

calcluteDiscount(100);
calcluteDiscount("100 TK");
calcluteDiscount(null);
