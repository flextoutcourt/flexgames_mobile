import Header from "@/components/navigation/Header";
import { Slot, Stack, useRouter } from "expo-router";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function JeNaiJamaisLayout(){

    const router = useRouter();

    return (
        <SafeAreaProvider style={{backgroundColor: "#111827"}}>
            <Header title={"Settings"} leftIcon="arrow-back-outline" rightIcon="cog" leftAction={() => router.back()} rightAction={() => router.navigate('/settings')} />
            <Slot />
        </SafeAreaProvider>
    )
}