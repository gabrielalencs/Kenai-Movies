import { useContext } from "react";

import { CategoryInformationContext } from "../context/CategoryInformationContext";


export const useCounterContext = () => {

    const context = useContext(CategoryInformationContext);
    
    if (!context) console.log('Contexto não encontrado!');

    return context;

};
