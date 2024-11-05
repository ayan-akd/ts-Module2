"use strict";
{
    //constraints
    const addCourse = (student) => {
        const course = "Next Level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        id: 123,
        name: "X",
        email: "x@x.com",
    });
    console.log(student1);
    const student2 = addCourse({
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
