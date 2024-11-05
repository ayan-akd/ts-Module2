{
  //mapped types

  const arrayOfNumbers: number[] = [1, 2, 3];

  // const arrayOfStrings: string[] = ["1", "2", "3"];

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrayOfStrings);

  interface AreaNumber {
    height: number;
    width: number;
  }
  //   type Width = AreaString["width"];

  // interface AreaString {
  //     height: string,
  //     width: string
  // }

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  // type Height = AreaString<>["height"]

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
