const newPost ={
  title: "मेरी नई पोस्ट",
  body: "यह मेरी नई पोस्ट की सामग्री है",
  userId: 101,
}
const postData = async (newPost) => {
  try {
    const response =await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // to tell server that data is in json format
      },
      body: JSON.stringify(newPost), // to change newpost in json format
    });

    if (!response.ok) {
      throw new Error("There is an error");
    }
    const postDataValue = await response.json();
    console.log(postDataValue);
    return postDataValue;
  } catch (error) { 
    console.log(error);
    return null;
  }
};

export { postData, newPost };
