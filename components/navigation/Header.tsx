import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { Dimensions, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
    title: string;
    leftIcon: string;
    leftAction: () => void;
    rightIcon: string;
    rightAction: () => void;
}

export default function Header ({title, leftIcon, leftAction, rightIcon, rightAction}: HeaderProps){

    const insets = useSafeAreaInsets();

    return(
        <View style={{width: Dimensions.get('screen').width, backgroundColor: "#111827", paddingTop: insets.top}}>
            <View style={{width: Dimensions.get('screen').width, backgroundColor: "#111827", padding: 20}}>
                <View style={{justifyContent: "space-between", alignItems: 'center', flexDirection: "row"}}>
                    <Ionicons name={leftIcon} onPress={leftAction} size={32} color='white' />
                    <Text style={{color: "white", fontWeight: 700, fontSize: 32, textTransform: "uppercase"}}>{title}</Text>
                    <Ionicons name={rightIcon} onPress={rightAction} size={32} color='white' />
                </View>
            </View>
        </View>
    )

}