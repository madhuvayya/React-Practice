import React, { useRef, useEffect, useState } from 'react'

function UseRef() {
    const [value,setValue] = useState('');

    let userInput = useRef(null);

    useEffect (() => {
        setValue(userInput);
    }) 

    return (
        <>
      <label>Enter some thing: </label>  
      <input ref={userInput}/>
      {value}
      </>
    )
}

export default UseRef;