import CustomButton from "@/components/_global/Button";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page(){

    const insets = useSafeAreaInsets();
    const router = useRouter();

    return(
        <>
            <View style={{flex: 1}}>
                <View style={{flex: 1, padding: 20}}>
                    <Text style={{fontSize: 32, color: 'white', marginBottom: 20}}>Comment qu'on joue ?</Text>
                    <Text style={{color: 'white', fontSize: 18, marginBottom: 20}}>Rien de plus simple que ce jeu !</Text>
                    <Text style={{color: "white", fontSize: 18, textAlign: 'justify'}}>Une phrase apparaît sur l'écran, toutes les personnes qui ont déjà fait ce qui est écrit, ils prennent le nombre de pénalités inscrite sur l'écran</Text>
                </View>
                <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
                    <CustomButton onPress={() => router.push('/games/jenaijamais/game')} title={"New game"} />
                </View>
            </View>
        </>
    )

}