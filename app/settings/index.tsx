import FranceFlagSVG from "@/assets/icons/flags/FranceSvg";
import BottomSheet from "@/components/_global/bottomSheets/BottomSheet";
import BottomDrawerLanguage from "@/components/_global/bottomSheets/Language";
import CustomButton from "@/components/_global/Button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, runOnJS, SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Page(){

    const [open, setOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    const router = useRouter();

    return(
        <GestureHandlerRootView style={styles.container_bis}>
            <>
                <View style={{padding: 20, gap: 20}}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 20}} onPress={() => setLanguageOpen(true)}>
                        <>
                            <Ionicons name="globe-outline" color={"white"} size={32} />
                            <Text style={{color: "white", fontSize: 20}}>Languages</Text>
                        </>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 20}} onPress={() => {alert('nightmode')}}>
                        <Ionicons name="moon-outline" color={"white"} size={32} />
                        <Text style={{color: "white", fontSize: 20}}>Mode sombre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 20}} onPress={() => router.push('/settings/suggestion')}>
                        <Ionicons name="mail-open-outline" color={"white"} size={32} />
                        <Text style={{color: "white", fontSize: 20}}>Proposer des questions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 20}} onPress={() => router.push('/settings/contact')}>
                        <Ionicons name="share-outline" color={"white"} size={32} />
                        <Text style={{color: "white", fontSize: 20}}>Nous contacter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 20}} onPress={() => {alert('nightmode')}}>
                        <Ionicons name="star-outline" color={"white"} size={32} />
                        <Text style={{color: "white", fontSize: 20}}>Évaluer l'application</Text>
                    </TouchableOpacity>
                </View>
                <View style={{position: 'absolute', bottom: 20, left: 20, right: 20, gap: 10}}>
                    <CustomButton title={"Logout"} type={"danger"} variant />
                    <CustomButton title={"Delete my account"} type={"danger"} onPress={() => setOpen(true)} />
                </View>
                <BottomSheet open={open} setOpen={setOpen} title={"Are you sure to delete your account ?"}>
                    <>
                        <View style={[styles.container, {justifyContent: 'center', alignItems: 'center', marginTop: 20}]}>
                            <CustomButton title={"Yes i'm sure"} type={"danger"} variant />
                            <CustomButton title={"Finally i'll stay here"} type='primary' onPress={() => setOpen(false)}  />
                        </View>
                    </>
                </BottomSheet>
                <BottomSheet height={350} open={languageOpen} setOpen={setLanguageOpen} title={"Language"}>
                    <View style={{gap: 20, marginTop: 20}}>
                        <TouchableOpacity style={{flexDirection: "row", gap: 10, alignItems: 'center'}}>
                            <Image width={32} height={32} source={require('./../../assets/icons/flags/france_flag.png')} style={{height: 32, width: 32}} />
                            <Text style={{color: "white", fontSize: 20}}>Français</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: "row", gap: 10, alignItems: 'center'}}>
                        <Image width={32} height={32} source={require('./../../assets/icons/flags/english_flag.png')} style={{height: 32, width: 32}} />
                            <Text style={{color: "white", fontSize: 20}}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: "row", gap: 10, alignItems: 'center'}}>
                        <Image width={32} height={32} source={require('./../../assets/icons/flags/spanish_flag.png')} style={{height: 32, width: 32}} />
                            <Text style={{color: "white", fontSize: 20}}>Español</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: "row", gap: 10, alignItems: 'center'}}>
                        <Image width={32} height={32} source={require('./../../assets/icons/flags/german_flag.png')} style={{height: 32, width: 32}} />
                            <Text style={{color: "white", fontSize: 20}}>Deutsch</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </>
        </GestureHandlerRootView>
    )

}

const styles = StyleSheet.create({
    label: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        marginTop: 16,
        color: "#dc2626",
        textAlign: 'center'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
    },
    swatch:{
        height: (Dimensions.get('screen').width - 10 * 10) / 7,
        aspectRatio: 1,
        borderRadius: 4 
    },
    sheet: {
        backgroundColor: "#1E293B",
        padding: 16,
        paddingBottom: 36,
        height: 220,
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