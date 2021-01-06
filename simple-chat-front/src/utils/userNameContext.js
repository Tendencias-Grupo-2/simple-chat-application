import { createContext } from "react";

const initialState = {
    contextName: '',
    setContextName: (contextName) => { }
}

export const userNameContext = createContext(initialState);
