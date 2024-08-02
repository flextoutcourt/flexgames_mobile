import { Ionicons } from "@expo/vector-icons";
import { Slot, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {

  const router = useRouter();

  return (
    <>
      <SafeAreaProvider style={{backgroundColor: "#111827"}}>
        <Slot />
      </SafeAreaProvider>
    </>
  );
}
