"use strict";
{
    const person1 = "car";
    const person2 = "bike";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Ayan",
        age: 25,
        address: "RNG",
    };
    const car = {
        brand: "BMW",
        model: "X5",
        releaseYear: 2021,
    };
    const result1 = getPropertyValue(user, "name");
    const result2 = getPropertyValue(car, "releaseYear");
    console.log(result1);
    console.log(result2);
}
