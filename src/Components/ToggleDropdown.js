// import { useRef } from "react";
function ToggleDropdown(props) {
  return (
    <>
      <input
        onInput={props.onInputChange}
        className="country-inp"
        value={props.country}
      />
    </>
  );
}
export default ToggleDropdown;

// const inp = useRef();
// onChange={() => inp.current.focus()}
// ref={inp}
// placeholder={props.country}
