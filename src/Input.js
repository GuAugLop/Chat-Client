import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import style from "./Input.module.css";

const Input = ({ value, setValue, ...props }) => {
  const inputRef = React.useRef();
  const btnRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  function sendEffect() {
    if (value.trim()) {
      btnRef.current.animate([{ transform: "translate(350%)" }], 800);
    }
  }

  return (
    <div className={style.inputContainer}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
        className={style.input}
      />
      <button onClick={() => sendEffect()} ref={btnRef} id="btn">
        <RiSendPlane2Fill />
      </button>
    </div>
  );
};

export default Input;
