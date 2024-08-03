import { PropsWithChildren } from "react";
import { Button, Pressable, StyleSheet, Text, Touchable, TouchableHighlight, Vibration } from "react-native";
import * as Haptics from "expo-haptics"

interface ButtonProps {
    title?: string;
    icon?: React.ReactNode;
    onPress?: () => void;
    type?: 'primary' | 'danger' | 'warning' | 'success',
    variant?: boolean
}

export default function CustomButton({title, icon, onPress, type = 'primary', variant}: ButtonProps){

    return(
        <TouchableHighlight onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)} onPress={onPress} style={[st[type], st.global, variant && st[`variant_${type}`]]} underlayColor={variant ? st[`variant_${type}`].backgroundColor : st[type].color} >
            <>
                {title && <Text style={[st.text, variant && {color: st[`variant_${type}`].color}]}>{title}</Text>}
                {icon && icon}
            </>
        </TouchableHighlight>
    )

}

const st = StyleSheet.create({
    primary: {
        backgroundColor: "#4f46e5",
        color: "#6366f1",
        elevation: 4
    },
    danger: {
        backgroundColor: "#dc2626",
        color: "#ef4444",
        elevation: 4
    },
    warning: {
        backgroundColor: "#ea580c",
        color: "#f97316",
        elevation: 4
    },
    success: {
        backgroundColor: "#16a34a",
        color: "#22c55e",
        elevation: 4
    },
    global: {
        padding: 10,
        borderRadius: 16,
    },
    text: {
        margin: 'auto',
        fontSize: 24,
        color: "white",
        textTransform: "capitalize"
    },
    variant_primary: {
        backgroundColor: '#111827',
        color: "#4f46e5",
        borderColor: "#4f46e5",
        borderWidth: 2
    },
    variant_danger: {
        backgroundColor: '#111827',
        color: "#ef4444",
        borderColor: "#ef4444",
        borderWidth: 2,
    },
    variant_warning: {
        backgroundColor: '#111827',
        color: "#ea580c",
        borderColor: "#ea580c",
        borderWidth: 2,
    },
    variant_success: {
        backgroundColor: '#111827',
        color: "#16a34a",
        borderColor: "#16a34a",
        borderWidth: 2,
    }
})