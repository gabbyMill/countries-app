function ToggleDropdown(props) {
  return (
    <>
      <input
        onInput={props.onInputChange}
        className="country-inp"
        // placeholder={props.country}
        value={props.country}
      />
    </>
  );
}
export default ToggleDropdown;
