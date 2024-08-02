import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Page(){

    const {id} = useLocalSearchParams();

    return(
        <Text>SKRT {id}</Text>
    )

}