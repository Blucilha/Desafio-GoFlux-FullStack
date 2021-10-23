import React from "react";
import MyContext from "./Context";

function Provider({ children }) {
    const values = {};
    return (
        <MyContext.Provider value={ values } >
            { children }
        </MyContext.Provider>
    )
}

export default Provider;
