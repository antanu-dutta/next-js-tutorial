"use client";

import React, { useEffect, useState } from "react";

const ClientComp = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Client Comp</h1>
      <button
        className="bg-amber-400 text-black p-3"
        onClick={() => alert("hi")}
      >
        Click me
      </button>
      <div>
        {data.map((curElem) => (
          <span key={curElem.id}>{curElem.title}</span>
        ))}
      </div>
    </>
  );
};

export default ClientComp;
