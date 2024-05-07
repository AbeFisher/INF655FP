import { useState, createContext } from "react";

const HuntsContext = createContext();

export const HuntsProvider = ( { children } ) => {
    const [hunts, setHunts] = useState([]);
    
    const addHunt = (item) => {
        setHunts([...hunts, item]);
    };

    const removeHunt = (id) => {
        setHunts(hunts.filter((item) => item.id !== id));
    };

    return (
        <HuntsContext.Provider
            value={{ 
                hunts,
                addHunt,
                removeHunt,
            }}
        >
            {children}
        </HuntsContext.Provider>
    );
};

export default HuntsContext;