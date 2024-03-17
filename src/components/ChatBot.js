import React, { useEffect, useState } from "react";
import "../App.css";

const Chatbot = ({ onClickHandler, onChaneHandler }) => {
  return (
    <div className="box">
      <textarea
        type="text"
        rows={5}
        cols={40}
        onChange={(e) => onChaneHandler(e.target.value)}
        placeholder="Copy paste your job description here.."
      />
      <button className="btn" onClick={onClickHandler}>
        Submit
      </button>
    </div>
  );
};

export default Chatbot;
