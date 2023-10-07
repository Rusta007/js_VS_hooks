import React, { useState } from "react";

function UseState() {
  const [name, setName] = useState("Jyoti");

  const handleClick = () => {
    setName("rusta");
  };

  // let name = "Jyoti";

  // const handleClick = () => {
  //   console.log("Clickable");
  //   const name = "Rusta";
  //   console.log(
  //     (document.querySelector("#Name").innerHTML = `My name is ${name}`)
  //   );
  // };

  return (
    <>
      <h1 id="Name">My name is {name}</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default UseState;
