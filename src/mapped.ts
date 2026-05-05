const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((number) =>
  number.toString(),
);

type AreaOfString = {
  [key in "Height" | "Width"]: string;
};

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: number }> = {
  width: 2,
  height: 4
};
