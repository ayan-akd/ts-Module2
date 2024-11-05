{
  //type assertion
  let a: any;
  a = "hello";
  a as string;

  const kgToG = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Converted Value is ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    } else {
      return "Invalid Input";
    }
  };
  const result1 = kgToG(6) as number;
  console.log(result1);
  const result2 = kgToG("5") as string;
  console.log(result2);

  interface CustomError {
    message: string;
  }
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
