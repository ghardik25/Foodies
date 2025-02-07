import { createContext, useState } from "react";

export const InsertDeleteContext = createContext("");

const BASE_URL = process.env.VITE_APP_API_URL;

const DataManipulation = (props) => {
  const insertion = async (data, collection) => {
    try {
        console.log("Started Inserting");
  
        // Req through fetch api
        const response = await fetch(`${BASE_URL}/add${collection}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const res = await response.json();

        if(res.entryCheck === 0) {                      // Entry doesn't exist
          alert(`Added ${collection} successfully`);
        }
        else {
          alert(`Entry Already Exists`);
        }
    }
    catch(error) {
        console.log(`${error} in insertion`);
    }
  };

  const deletion = async (data, collection) => {
    try {
        console.log("Started Deleting");
  
        // Req through fetch api
        const response = await fetch(`${BASE_URL}/delete${collection}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const res = await response.json();

        if(res.entryCheck === 0) {                    // Entry doesn't exist
          alert(`${collection} doesn't exists`);
        }
        else {
          alert(`Deleted ${collection} successfully!`);
        }
    }
    catch(error) {
        console.log(`${error} in deletion`);
    }
  };

  return (
    <InsertDeleteContext.Provider value={{ insertion, deletion }}>
      {props.children}
    </InsertDeleteContext.Provider>
  );
};

export default DataManipulation;
