{
  //utility types

  // Pick types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //Omit

  type ContactInfo = Omit<Person, "name" | "age">;

  //require

  type PersonRequired = Required<Person>;

  //partial

  type PersonPartial = Partial<Person>;

  //readOnly

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    age: 50,
    contactNo: "007",
    name: "X",
  };

  // person1.name = "Y"

  console.log(person1);

  //Record

  // interface MyObj {
  //     a:string;
  //     b:string;
  // }

  type MyObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {};

  emptyObj.a = "A";

  const obj1: MyObj = {
    a: "A",
    b: "B",
    c: "C",
    d: "6",
  };
}
