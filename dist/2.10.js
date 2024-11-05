"use strict";
{
    //mapped types
    const arrayOfNumbers = [1, 2, 3];
    // const arrayOfStrings: string[] = ["1", "2", "3"];
    const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
    console.log(arrayOfStrings);
    // type Height = AreaString<>["height"]
    const area1 = {
        height: "100",
        width: 50,
    };
}
