import React, { useRef, useEffect } from "react";
import Input from "./Input";

function Ref() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    console.log({ inputRef });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Input ref={inputRef} />
    </div>
  );
}

export default Ref;