import { PropsWithChildren } from "react";
import { Button, Pressable, StyleSheet, Text, Touchable, TouchableHighlight, Vibration } from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
    type?: 'primary' | 'danger' | 'warning' | 'success'
}

export default function CustomButton({title, onPress, type = 'primary'}: ButtonProps){

    return(
        <TouchableHighlight onPressIn={() => Vibration.vibrate(50)} onPress={onPress} style={[st[type], st.global]} underlayColor={st[type].color} >
            <Text style={st.text}>{title}</Text>
        </TouchableHighlight>
    )

}

const st = StyleSheet.create({
    primary: {
        backgroundColor: "#4f46e5",
        color: "#6366f1"
    },
    danger: {
        backgroundColor: "#dc2626",
        color: "#ef4444"
    },
    warning: {
        backgroundColor: "#ea580c",
        color: "#f97316"
    },
    success: {
        backgroundColor: "#16a34a",
        color: "#22c55e"
    },
    global: {
        padding: 10,
        borderRadius: 16,
        elevation: 4,
    },
    text: {
        margin: 'auto',
        fontSize: 24,
        color: "white",
        textTransform: "capitalize"
    }
})