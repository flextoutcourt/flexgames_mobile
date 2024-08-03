import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ProfileLayout(){
    return (
        <SafeAreaProvider style={{backgroundColor: "#111827"}}>
            <Slot />
        </SafeAreaProvider>
    )
}