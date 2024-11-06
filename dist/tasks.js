"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //task 1
    console.log("Hello World, I will complete this course successfully and become a Next level Web Developer!");
    //task 2
    const task2Funtion = (name, age, role = "user") => {
        console.log(`My name is ${name} and I am ${age} years old and my role is ${role}`);
    };
    task2Funtion("Ayan", 25);
    const book = {
        name: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Adventure",
        releaseYear: 1988,
        price: 250,
    };
    //task 5
    const stringChange = (str) => {
        const splitStr = str.split("");
        const reverseStr = splitStr.reverse();
        const joinStr = reverseStr.join("");
        return joinStr;
    };
    console.log(stringChange("Hello"));
    const reverseString = (str) => str.split("").reverse().join("");
    console.log(reverseString("Hello"));
    //task 6
    const sumOfArray = (...numbers) => {
        let sum = 0;
        numbers.forEach((num) => {
            sum += num;
        });
        return sum;
    };
    console.log(sumOfArray(1, 2, 3, 4));
    //task 7
    const task7Function = (X) => {
        if (typeof X === "string") {
            return X.length;
        }
        else if (typeof X === "number") {
            return X * X;
        }
    };
    console.log(task7Function(5));
    const describeAdmin = (user) => {
        return `The admin name is ${user.name} and the admin level is ${user.adminLevel}. His email is ${user.email}`;
    };
    console.log(describeAdmin({ name: "Ayan", email: "ayan@gmail.com", adminLevel: 1 }));
    const getEmployeeCity = (employee) => {
        var _a;
        return (_a = employee === null || employee === void 0 ? void 0 : employee.address) === null || _a === void 0 ? void 0 : _a.city;
    };
    console.log(getEmployeeCity({
        name: "Ayan",
        age: 25,
        salary: 100000,
        address: { street: "123 Main St", city: "New York", country: "USA" },
    }));
    //task 10
    const getDisplayName = (name) => {
        const result = name !== null && name !== void 0 ? name : "Anonymous";
        return result;
    };
    console.log(getDisplayName(null));
    //task 11
    const processData = (data) => {
        if (typeof data === "string") {
            return data.toUpperCase();
        }
        else if (typeof data === "number") {
            return data * data;
        }
    };
    console.log(processData("hello"));
    console.log(processData(5));
    //task 12
    const handleError = (message) => {
        throw new Error(message);
    };
    //task 13
    const genericFunction = (param) => {
        return Array.from(new Set(param));
    };
    console.log(genericFunction([1, 2, 3, 4, 5, 1, 5, 3, 9]));
    console.log(genericFunction(["a", "b", "c", "a", "e"]));
    const asyncData = (data) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    });
    asyncData({ name: "Ayan", age: 25 }).then((data) => {
        console.log(data);
    });
}
