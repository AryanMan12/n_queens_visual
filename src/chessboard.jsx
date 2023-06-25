import React, { useState } from "react";
import styled from "styled-components";

const Chessboard = ({ n }) => {
  window.value = n;
  
  const chessboard = [];
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
      chessboard.push((alpha[i] + j).toString());
    }
  }

  const changecol = (e) => {
    console.log(e);
    const l = e.target.id;
    if (document.getElementById(l).style.backgroundColor === "green") {
      return false;
    }
    document.getElementById(l).innerHTML = "Q";
    for (let i = 1; i <= n; i++) {
      document.getElementById((l[0] + i).toString()).style.backgroundColor =
        "green";
      document.getElementById(
        (alpha[i - 1] + l[1]).toString()
      ).style.backgroundColor = "green";
    }
    // variables for changing color along diagonals
    let i = alpha.indexOf(l[0]),
      j = l[1],
      k = l[1];

    //Changing color of diagonal downwards
    while (i <= n - 1) {
      if (j <= n) {
        document.getElementById(
          (alpha[i] + j).toString()
        ).style.backgroundColor = "green";
        j++;
      }
      if (k > 0) {
        document.getElementById(
          (alpha[i] + k).toString()
        ).style.backgroundColor = "green";
        k--;
      }
      i++;
    }

    //Resetting variables for remaining squares to be colored
    i = alpha.indexOf(l[0]);
    j = l[1];
    k = l[1];

    while (i >= 0) {
      if (j > 0) {
        document.getElementById(
          (alpha[i] + j).toString()
        ).style.backgroundColor = "green";
        j--;
      }
      if (k <= n) {
        document.getElementById(
          (alpha[i] + k).toString()
        ).style.backgroundColor = "green";
        k++;
      }
      i--;
    }
  };
  return (
    <div>
      <Board>
        {chessboard.map((x) => {
          return <Square id={x} onClick={changecol}></Square>;
        })}
      </Board>
    </div>
  );
};
const n = window.value;
export default Chessboard;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 75px);
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Square = styled.button`
  height: 75px;
  width: 75px;
  background-color: #ff4444;
  outline: none;
`;
