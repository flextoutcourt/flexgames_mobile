import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, runOnJS, SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

interface BottomSheetProps extends PropsWithChildren {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    height?: number;
    title: string;
}

export default function BottomSheet({children, open, setOpen, height = 220, title}: BottomSheetProps){

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
        if(offset.value < height / 3){
            offset.value = withSpring(0)
        }else{
            offset.value = withTiming(height, {}, () => {
                runOnJS(toggleSheet)()
            })
        }
    })

    const translateY = useAnimatedStyle(() => ({
        transform: [{translateY: offset.value}]
    }));

    return(
        open && (
            <AnimatedPressable
                entering={FadeIn}
                exiting={FadeOut}
                onPress={toggleSheet}
                style={styles.backdrop}
            >
                <GestureDetector gesture={pan}>
                    <Animated.View
                        style={[styles.sheet, translateY, {height}]}
                        entering={SlideInDown.springify().damping(15)}
                        exiting={SlideOutDown}
                    >
                        <>
                            <View style={{height: 4, borderRadius: 10, backgroundColor: "white", position: 'absolute', width: 50, left: Dimensions.get('screen').width /2 - (50/2), top: 10}}></View>
                            <Text style={styles.label}>{title}</Text>
                            {children}
                        </>
                    </Animated.View>
                </GestureDetector>
            </AnimatedPressable>
        )
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        marginTop: 16,
        color: "white",
        textAlign: 'center'
    },
    sheet: {
        backgroundColor: "#1E293B",
        padding: 16,
        paddingBottom: 36,
        width: "100%",
        position: "absolute",
        bottom: -20 * 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1,
    },
    backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1,
    },
    container_bis: {
        flex: 1,
        backgroundColor: "transparent"
    }
})