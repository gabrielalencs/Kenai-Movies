import { createContext } from "react";

export const CategoryInformationContext = createContext();


export const CategoryInformationProvider = ({ children }) => {

    // ?    criar objeto com as informações (url, texto do titulo) e passar para os componentes, criar context
    // const categoryInformation

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
};