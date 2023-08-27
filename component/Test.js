import React, { useState } from "react";

const Test = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItems, setEditItems] = useState(null);
  const addIt = () => {
    if (!toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === editItems) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setInputData("");
      setToggleSubmit(true);
      setEditItems(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteIt = (id) => {
    const updatedValue = items.filter((elem) => {
      return id !== elem.id;
    });
    setItems(updatedValue);
  };

  const editIt = (id) => {
    const newEditItems = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItems);
    setInputData(newEditItems.name);
    setToggleSubmit(false);
    setEditItems(id);
  };
  return (
    <>
      <div>
        <h1>Text box</h1>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        {toggleSubmit ? (
          <button onClick={addIt}> Add</button>
        ) : (
          <button onClick={addIt}> Edit</button>
        )}
      </div>
      <div>
        {items.map((elem) => {
          return (
            <div key={elem.id}>
              <h3>{elem.name}</h3>
              <button onClick={() => deleteIt(elem.id)}> Delete</button>
              <button onClick={() => editIt(elem.id)}> Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Test;
