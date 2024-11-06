{
  //task 1

  console.log(
    "Hello World, I will complete this course successfully and become a Next level Web Developer!"
  );

  //task 2

  const task2Funtion = (
    name: string,
    age: number,
    role: "admin" | "user" | "guest" = "user"
  ) => {
    console.log(
      `My name is ${name} and I am ${age} years old and my role is ${role}`
    );
  };
  task2Funtion("Ayan", 25);

  //task 3
  type Person = {
    Name: string;
    Address: string;
    HairColor: string;
    EyeColor: string;
    Income: number;
    Expense: number;
    Hobbies: string[];
    Family: string[];
    Members: number;
    Job: string;
    Skills: string[];
    MaritalStatus: string;
    Friends: string[];
  };

  // task 4
  interface Book {
    name: string;
    author: string;
    genre: string;
    releaseYear: number;
    price: number;
  }
  interface Magazine {
    name: string;
    author: string;
    genre: string;
    releaseYear: number;
  }

  type BookOrMagazine = Book | Magazine;
  type BookAndMagazine = Book & Magazine;

  const book: BookAndMagazine = {
    name: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    releaseYear: 1988,
    price: 250,
  };

  //task 5
  const stringChange = (str: string): string => {
    const splitStr = str.split("");
    const reverseStr = splitStr.reverse();
    const joinStr = reverseStr.join("");
    return joinStr;
  };
  console.log(stringChange("Hello"));
  const reverseString = (str: string): string =>
    str.split("").reverse().join("");
  console.log(reverseString("Hello"));

  //task 6
  const sumOfArray = (...numbers: number[]) => {
    let sum = 0;
    numbers.forEach((num) => {
      sum += num;
    });
    return sum;
  };
  console.log(sumOfArray(1, 2, 3, 4));

  //task 7
  const task7Function = (X: string | number) => {
    if (typeof X === "string") {
      return X.length;
    } else if (typeof X === "number") {
      return X * X;
    }
  };
  console.log(task7Function(5));

  //task 8
  interface User {
    name: string;
    email: string;
  }
  interface Admin {
    adminLevel: number;
  }
  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `The admin name is ${user.name} and the admin level is ${user.adminLevel}. His email is ${user.email}`;
  };
  console.log(
    describeAdmin({ name: "Ayan", email: "ayan@gmail.com", adminLevel: 1 })
  );

  //task 9
  interface Employee {
    name: string;
    age: number;
    salary: number;
    address: {
      street: string;
      city: string;
      country: string;
    };
  }

  const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee?.address?.city;
  };
  console.log(
    getEmployeeCity({
      name: "Ayan",
      age: 25,
      salary: 100000,
      address: { street: "123 Main St", city: "New York", country: "USA" },
    })
  );

  //task 10
  const getDisplayName = (name: string | null | undefined): string => {
    const result = name ?? "Anonymous";
    return result;
  };
  console.log(getDisplayName(null));

  //task 11
  const processData = (data: unknown) => {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "number") {
      return data * data;
    }
  };
  console.log(processData("hello"));
  console.log(processData(5));

  //task 12
  const handleError = (message: string): never => {
    throw new Error(message);
  };

  //task 13

  const genericFunction = <T>(param: T[]): T[] => {
    return Array.from(new Set(param));
  };
  console.log(genericFunction([1, 2, 3, 4, 5, 1, 5, 3, 9]));
  console.log(genericFunction(["a", "b", "c", "a", "e"]));

  //task 14

  interface User14 {
    name: string;
    age: number;
  }

  const asyncData = async (data: User14): Promise<User14> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };

  asyncData({ name: "Ayan", age: 25 }).then((data) => {
    console.log(data);
  });

  //task 15

  const isString = (value: unknown): value is string => {
    return typeof value === "string";
  };

  const printUpperCase = (value: unknown): void => {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log("value is not a string");
    }
  };

  printUpperCase("hello");
  printUpperCase(5);

  //task 16

  interface User16 {
    name: string;
    age: number;
    city: string;
  }

  const task16Function = (object: User16, key: keyof User16) => {
    return object[key];
  };

  const user: User16 = {
    name: "Alice",
    age: 30,
    city: "New York",
  };

  console.log(task16Function(user, "name"));
  console.log(task16Function(user, "age"));
  console.log(task16Function(user, "city"));
}
