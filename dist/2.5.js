"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const arr1 = createArray("Bangladesh");
    const arrGen = createArrayWithGeneric("India");
    const genericObj = createArrayWithGeneric({ id: 123, name: "X" });
    console.log(arr1);
    console.log(arrGen);
    console.log(genericObj);
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const arr2 = createArrayWithTuple("Bangladesh", 123);
    const arrTuple = createArrayWithTuple("India", "Canada");
    const genericObjWithTuple = createArrayWithTuple("BD", { id: 123, name: "X" });
    console.log(arr2);
    console.log(arrTuple);
    console.log(genericObjWithTuple);
    const addCourse = (student) => {
        const course = "Next Level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        id: 123,
        name: "X",
    });
    console.log(student1);
    const student2 = addCourse({
        id: 123,
        name: "Y",
        age: 50,
    });
    console.log(student2);
}
