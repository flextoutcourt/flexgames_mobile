import Header from "@/components/navigation/Header";
import { Slot, Stack, useRouter } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function JeNaiJamaisLayout(){

    const router = useRouter();

    useEffect(() => {
        setStatusBarStyle('light', true)
    }, [])

    return (
        <>
            <SafeAreaProvider style={{backgroundColor: "#111827"}}>
                <Header title={"Je n'ai jamais"} leftIcon="home" rightIcon="cog" leftAction={() => router.navigate('')} rightAction={() => router.push('settings')} />
                <Slot />
            </SafeAreaProvider>
        </>
    )
}