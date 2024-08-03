import CustomButton from "@/components/_global/Button";
import Header from "@/components/navigation/Header";
import { Slot, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ProfileLayout(){

    const router = useRouter();

    return (
        <SafeAreaProvider style={{backgroundColor: "#111827"}}>
            <Header title={"Login"} leftIcon="home" rightIcon="cog" leftAction={() => router.navigate('/')} rightAction={() => router.push('/settings')} />
            <Slot />
        </SafeAreaProvider>
    )
}