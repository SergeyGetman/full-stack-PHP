import React from "react";

const TextComponent = ({ text }: { text: string }) => {
  console.log("THIS IS TEXT", text);
  return <h1>{text}</h1>;
};

export default TextComponent;
