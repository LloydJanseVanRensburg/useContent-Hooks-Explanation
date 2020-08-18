import React, { useState } from "react";
import AppContext from "./app-context";

const AppState = (props) => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        message: "This is from the context",
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
