{
  //constraints

  const addCourse = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "Next Level";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse<{ id: number; name: string; email: string }>({
    id: 123,
    name: "X",
    email: "x@x.com",
  });
  console.log(student1);
  const student2 = addCourse<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>({
    id: 124,
    name: "Y",
    email: "y@y.com",
    age: 50,
  });
  console.log(student2);
  const student3 = addCourse({
    id: 125,
    name: "z",
    email: "z@z.com",
    age: 50,
  });
  console.log(student3);
}
