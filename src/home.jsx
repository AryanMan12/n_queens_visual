import React, { useState } from "react";
import Chessboard from "./chessboard";

const Home = () => {
  const [n, setn] = useState(8);
  const updaten = (e) => {
    setn(e.target.value);
  };
  return (
    <div>
      <input type="number" value={n} onChange={updaten}></input>
      <button>Create</button>
      <Chessboard key={n} x n={n} />
    </div>
  );
};
export default Home;
