{
  //promise

  interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  getTodo();

  const createPromise = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      const data: boolean = true;
      if (data) resolve(data);
      else reject("Failed to load data");
    });
  };

  const showData = async (): Promise<boolean> => {
    const data: boolean = await createPromise();
    console.log(data);
    return data;
  };
  showData();
}
