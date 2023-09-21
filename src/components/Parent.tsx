import React, { useRef, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [idx, setIndex] = useState<any>(null);
  //const newRef = new Array(3).fill("").map((el, idx) => setIndex(idx));

  const newRef = [0, 1, 2];

  console.log("IDX", idx);

  const referenceRef = useRef(null);

  const handleClick = (array: any) => {
    // @ts-ignore
    console.log("REF", referenceRef[array[0]]?.current?.value);
    console.log("REF2", referenceRef);
  };

  const handleFocus = () => {
    // @ts-ignore
    referenceRef.current?.focus();
  };

  return (
    <>
      <h1>Hello, this is parent </h1>
      <Child
        props={newRef}
        ref={referenceRef as React.RefObject<HTMLInputElement>}
        key={idx}
      />
      <button
        style={{ background: "yellow" }}
        onClick={() => handleClick(newRef)}
      >
        GET REF
      </button>
      <button style={{ background: "yellow" }} onClick={handleFocus}>
        GET FOCUS
      </button>
    </>
  );
};

export default Parent;
