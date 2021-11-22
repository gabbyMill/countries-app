import React, { useEffect, useState } from "react";

function useInputHook(val) {
  console.log(val);
  const [searchBar, setSearchBar] = useState(val);

  useEffect(() => {
    console.log(searchBar);
  });
}
export default useInputHook;
