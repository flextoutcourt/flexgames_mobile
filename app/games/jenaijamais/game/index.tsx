import CustomButton from "@/components/_global/Button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Page(){

    const router = useRouter();

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 32, color: "white"}}>Je n'ai jamais sucé mon pote</Text>
            </View>
            <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10, gap: 10}}>
                <CustomButton title={"Next question"} onPress={() => {}} />
                <CustomButton title={"Quit to lobby"} type={"danger"} onPress={() => router.navigate('/games/jenaijamais')} />
            </View>
        </View>
    )

}