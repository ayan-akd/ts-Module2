{
  //interface

  type userType = {
    name: string;
    age: number;
  };
  type RoleType = {
    role: string;
  };

  interface user {
    name: string;
    age: number;
  }

  type userWithRole1 = userType & RoleType;
  interface userWithRole2 extends user {
    role: string;
  }
  const user1: userWithRole1 = {
    name: "John",
    age: 20,
    role: "admin",
  };

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const roll: Roll2 = [1, 2, 3];

  type Add = (a: number, b: number) => number;
  interface Add1 {
    (a: number, b: number): number;
  }

  const add: Add1 = (a, b) => a + b;
}
