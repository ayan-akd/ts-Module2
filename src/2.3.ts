{
    //generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [1, 2, 3];
    const rollNumbers: GenericArray<number> = [1, 2, 3];

    // const mentors: string[] = ["John", "Mike", "Matt"];
    const mentors: GenericArray<string> = ["John", "Mike", "Matt"];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];


    const user:GenericArray<{name:string, age:number}> = [
        {
            name: "Akd",
            age:50
        },
        {
            name: "PKS",
            age:100
        },
    ]

    //generic tuple

    type GenericTuple<X,Y> = [X,Y]

    const manush:GenericTuple <string,string> = ["Mr.x","Mr.y"]

    const UserWithID:GenericTuple<number,{name:string,age:number}> =[123, {name:"Akd",age:50}]





































}