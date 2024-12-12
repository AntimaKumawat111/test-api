const test = async () => {
  try {
    const abc = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    if (!abc.ok) {
      throw new Error("http error"); // when respone is failed
    }
    const data = await abc.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default test;
