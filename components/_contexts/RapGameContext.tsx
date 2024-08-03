import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";

interface RapGameContext {
    artist1: any;
    setArtist1: Dispatch<SetStateAction<any>>;
    artist2: any;
    setArtist2: Dispatch<SetStateAction<any>>;
}

export const RapGameContext = createContext<RapGameContext>(undefined as any);

export const useRapGameContext = () => useContext(RapGameContext);

export default function RapGameProvider ({children}: PropsWithChildren) {

    const [artist1, setArtist1] = useState(undefined as any);
    const [artist2, setArtist2] = useState(undefined as any);

    const value = {
        artist1, setArtist1,
        artist2, setArtist2
    }

    return(
        <RapGameContext.Provider value={value}>
            {children}
        </RapGameContext.Provider>
    )

}