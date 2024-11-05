{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  interface User {
    id: number;
    name: string;
  }

  const arr1 = createArray("Bangladesh");
  const arrGen = createArrayWithGeneric<string>("India");
  const genericObj = createArrayWithGeneric<User>({ id: 123, name: "X" });
  console.log(arr1);
  console.log(arrGen);
  console.log(genericObj);

  const createArrayWithTuple = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };

  interface User {
    id: number;
    name: string;
  }

  const arr2 = createArrayWithTuple<string, number>("Bangladesh", 123);
  const arrTuple = createArrayWithTuple<string, string>("India", "Canada");
  const genericObjWithTuple = createArrayWithTuple<
    string,
    { id: number; name: string }
  >("BD", { id: 123, name: "X" });
  console.log(arr2);
  console.log(arrTuple);
  console.log(genericObjWithTuple);

  const addCourse = <T>(student: T) => {
    const course = "Next Level";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse<{ id: number; name: string }>({
    id: 123,
    name: "X",
  });
  console.log(student1);
  const student2 = addCourse<{ id: number; name: string; age: number }>({
    id: 123,
    name: "Y",
    age: 50,
  });
  console.log(student2);
}
