import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, runOnJS, SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function BottomDrawerLanguage() {

    const [open, setOpen] = useState(false);
    const offset = useSharedValue(0);
    const toggleSheet = () => {
        setOpen(!open);
        offset.value = 0;
    }

    const pan = Gesture.Pan().onChange((event) => {
        const offsetDelta = event.changeY + offset.value;
        const clamp = Math.max(-20, offsetDelta);
        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    }).onFinalize(() => {
        if(offset.value < 220 / 3){
            offset.value = withSpring(0)
        }else{
            offset.value = withTiming(220, {}, () => {
                runOnJS(toggleSheet)()
            })
        }
    })

    const translateY = useAnimatedStyle(() => ({
        transform: [{translateY: offset.value}]
    }));

    return(
        <View>
            
        </View>
    )

}