import React, { useEffect } from "react";

const FormRegister = () => {
  useEffect(() => {
    fetch("http://roud-map", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then((r) => r.json())
      .then((data) => console.log("RESPONSE", data));
  }, []);

  return (
    <div>
      <h1>Hello Register</h1>
    </div>
  );
};

export default FormRegister;
