import { useRapGameContext } from "@/components/_contexts/RapGameContext";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Animated, { BounceInDown, BounceOutDown, Easing, FadeInDown, SlideOutRight, useAnimatedStyle, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Page(){

    const {artist1, setArtist1, artist2, setArtist2} = useRapGameContext();
    const [ar1, setAr1] = useState(artist1);
    const [ar2, setAr2] = useState(artist2);
    useEffect(() => {
        setArtist1(null);
        setArtist2(null);
    }, [ar1, ar2])

    return(
        <Animated.View entering={FadeInDown} exiting={SlideOutRight} style={{flex: 1, backgroundColor: "#16A34A", justifyContent: 'center', alignItems: 'center', gap: 40, padding: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Animated.View entering={BounceInDown} exiting={BounceOutDown}>
                <Image style={{height: 206, width: 206, borderRadius: 100}} src={ar1.images[0]?.url ?? 'https://picsum.photos/96'}/>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 26}}>{ar1.name}</Text>
                </Animated.View>
                <Animated.View entering={BounceInDown.delay(200)} exiting={BounceOutDown}>
                    <Image style={{height: 206, width: 206, borderRadius: 100, marginLeft: -40}} src={ar2.images[0]?.url ?? 'https://picsum.photos/96'}/>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 26, marginLeft: -40}}>{ar2.name}</Text>
                </Animated.View>
            </View>
            <Animated.Text entering={BounceInDown.delay(400)} exiting={BounceOutDown} style={{fontSize: 50, color: "white", textAlign: 'center'}}>This featuring exists</Animated.Text>
        </Animated.View>
    )

}