import { useEffect, useState } from "react";
import Test from "./test";
import Card from "./Card";
import { postData, newPost } from "./post";

function Get() {
  const [value, setValue] = useState([]);
  const [postValue, setPostValue] = useState(null);

  useEffect(() => {
    const dataValue = async () => {
      const data = await Test();
      setValue(data);
    };
    dataValue();
  }, []);

  const handlePostData = async () => {
    const response = await postData(newPost); // postData को कॉल करें
    if (response) {
      setPostValue(response); // पोस्ट किए गए डेटा को state में स्टोर करें
    }
  };

  useEffect(() => {
    console.log("Updated Post Value:", postValue);
  }, [postValue]);

  return (
    <>
      <div className="Get">
        <h2>Fetch data</h2>
        <button id="postBtn" onClick={handlePostData}>
          Post
        </button>

        <div className="adfa">
          {value.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              body={item.body}
              id={item.id}
            />
          ))}

          {postValue && (
              <Card
                title={postValue.title}
                body={postValue.body}
                id={postValue.id}
              />
          )}
        </div>
      </div>
    </>
  );
}

export default Get;
