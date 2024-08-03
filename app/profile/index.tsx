import CustomButton from "@/components/_global/Button";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export default function Page(){

    return(
        <>
            <View>
                <View>
                    <Image src="https://picsum.photos/490" />
                    <View>
                        <CustomButton title="Change info" onPress={() => alert('open profile informations')} />
                        <CustomButton icon={<Ionicons name="lock-open" />} />
                    </View>
                </View>
                <View >
                    <View>
                        <Text style={{fontSize: 22, color: 'white', fontWeight: 700}}>12</Text>
                        <Text style={{fontSize: 12, color: '#A8A8A8'}}>Wins</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 22, color: 'white', fontWeight: 700}}>14</Text>
                        <Text style={{fontSize: 12, color: '#A8A8A8'}}>Parties jouées</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 22, color: 'white', fontWeight: 700}}>2500</Text>
                        <Text style={{fontSize: 12, color: '#A8A8A8'}}>pénalités subies</Text>
                    </View>
                </View>
            </View>
            <Text style={{textTransform: 'uppercase', fontSize: 22, color: "#fff"}}>Flextoutcourt</Text>
            <Text style={{textTransform: "lowercase", fontSize: 16, color: "#A8A8A8"}}>@flextoutcourt</Text>
        </>
    )

}