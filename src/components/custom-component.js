/* custom-compnent.js */
import React, { useEffect } from "react";

const CustomComponent = ({ label }) => {
  useEffect(() => {
    console.log(`${label} created`);
    return () => console.log(`${label} destroyed`);
  }, []);
return <div>{label}</div>;
};

export default CustomComponent;