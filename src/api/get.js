import { useEffect, useState } from "react";
import Test from "./test";
import Card from "./Card";

function Get() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const dataValue = async () => {
      const data = await Test();
      setValue(data);
    };
    dataValue();
  }, []);

  return (
    <>
      <div className="Get">
        <h2>Fetch data</h2>
        <div className="adfa">
          {value.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              body={item.body}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Get;
