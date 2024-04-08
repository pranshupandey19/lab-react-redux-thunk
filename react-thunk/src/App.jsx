import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./utils/redux/action";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((storeData) => storeData.user);

  return (
    <>
    <div style={{textAlign:"center"}}>
    <button 
        onClick={() => {
          dispatch(FetchData());
        }}
      >
        GET DATA
      </button>
    </div>
      {users.map((e, i) => (
        <fieldset key={i}>
          <legend>{e.username}</legend>
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>
        </fieldset>
      ))}
    </>
  );
}

export default App;
