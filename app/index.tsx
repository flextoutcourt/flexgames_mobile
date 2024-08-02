import { Link, useRouter } from "expo-router";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import {LinearGradient} from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";

export default function Index() {

  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleSelectGame = () => {

  }

  return (
    <View style={{flex: 1, position: "relative"}}>
      <Image src="https://picsum.photos/1920/1080" style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').width}} />
      <View style={{position: 'absolute', opacity: 0.4, top: Dimensions.get('screen').width - 100, left: 0, right: 0, height: 100}}>
        <LinearGradient colors={['rgba(15,23,42,1)','rgba(15,23,42,0)']} start={{x: 0,y: 0.5}} end={{x: 0,y:0}} style={StyleSheet.absoluteFill} />
      </View>
      <ScrollView style={{padding: 20}}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/games/jenaijamais')} style={{backgroundColor: "white", padding: 5, borderRadius: 16, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap:10}}>
          <>
            <View style={{width: 100, height: 100}}>
              <Image src="https://picsum.photos/80" style={[StyleSheet.absoluteFill, {borderRadius: 16}]} />
            </View>
            <Text style={{color: "black", fontSize: 24, textTransform: "uppercase"}}>Je n'ai jamais</Text>
          </>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: "auto"
  }
})
