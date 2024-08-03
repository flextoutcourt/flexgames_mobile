import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";
global.Buffer = require('buffer').Buffer;

interface SpotifyContext {
    accessToken: string;
    setAccessToken: Dispatch<SetStateAction<string>>;
}

export const SpotifyContext = createContext<SpotifyContext>(undefined as any)

export const useSpotifyContext = () => useContext(SpotifyContext);

export default function SpotifyProvider({children}: PropsWithChildren){

    const [accessToken, setAccessToken] = useState(undefined as any);

    const client_id = '9b7913e09bf04758a4913316401e7504';
    const client_secret = 'f8f6c768073243d29c7734f18fd3ea44'

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            "Authorization": 'Basic ' + (Buffer.from(client_id+':'+client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "grant_type=client_credentials",
    }

    const getSpotifyToken = async () => {
        const promise = await fetch(authOptions.url, {
            method: 'POST',
            ...authOptions
        });
        if(promise.ok){
            const response = await promise.json();
            setAccessToken(response.access_token);
        } else {
            throw new Error('Reuest failed! Status code : ' + promise.status + ' ' + promise.statusText)
        }
    }

    useEffect(() => {
        getSpotifyToken();
    }, [setAccessToken])

    const value = {accessToken, setAccessToken};

    return(
        <SpotifyContext.Provider value={value}>
            {children}
        </SpotifyContext.Provider>
    )

}