import Header from "@/components/navigation/Header";
import { Slot, Stack, useRouter } from "expo-router";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function JeNaiJamaisLayout(){

    const router = useRouter();

    return (
        <SafeAreaProvider style={{backgroundColor: "#111827"}}>
            <Header title={"Je n'ai jamais"} leftIcon="home" rightIcon="cog" leftAction={() => router.navigate('')} rightAction={() => router.push('settings')} />
            <Slot />
        </SafeAreaProvider>
    )
}