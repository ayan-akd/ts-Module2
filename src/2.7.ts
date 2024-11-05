{
  //generic constraint with keyof operator

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship";

  type VehicleOwner = keyof Vehicle;

  const person1: Owner = "car";
  const person2: VehicleOwner = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
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
