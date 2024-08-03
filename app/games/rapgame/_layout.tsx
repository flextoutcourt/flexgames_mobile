import RapGameProvider from "@/components/_contexts/RapGameContext";
import SpotifyProvider from "@/components/_contexts/SpotifyContext";
import Header from "@/components/navigation/Header";
import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RapGameLayout(){

    const router = useRouter();

    return(
        <SafeAreaProvider style={{backgroundColor: "#111827"}}>
            <Header title="Rap Jeu" leftIcon="arrow-back" leftAction={() => router.back()} />
                <SpotifyProvider>
                    <RapGameProvider>
                        <Slot />
                    </RapGameProvider>
                </SpotifyProvider>
        </SafeAreaProvider>
    )
}