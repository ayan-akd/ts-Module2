"use strict";
{
    //type assertion
    let a;
    a = "hello";
    a;
    const kgToG = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted Value is ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
        else {
            return "Invalid Input";
        }
    };
    const result1 = kgToG(6);
    console.log(result1);
    const result2 = kgToG("5");
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
