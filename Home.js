import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import { useState } from "react";

export default function Home() {
    const [selectoption, setSelectoption]=useState("");
    function handlestate(e){
      setSelectoption(e.target.value);
    }
    function handleSubmit(e){
      e.preventDefault();
      alert("form submitted");
    }
  return (
    <div>
            <form onSubmit={handleSubmit}>
            <label>
              Select a value
              <select value={selectoption} onChange={handlestate}>
              <option value="data1">
                Data1
              </option>
              <option value="data2">
                Data2
              </option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>

    </div>
  )
}
