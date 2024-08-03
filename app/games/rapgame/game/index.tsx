import CustomButton from "@/components/_global/Button";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Image, Pressable, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import * as Haptics from "expo-haptics"
import { useEffect, useState } from "react";
import { useSpotifyContext } from "@/components/_contexts/SpotifyContext";
import { useRouter } from "expo-router";
import { useRapGameContext } from "@/components/_contexts/RapGameContext";

export default function Page(){

    const router = useRouter();

    const [value, setValue] = useState<string>('');
    const [search, setSearch] = useState<any[]>([]);
    const {accessToken} = useSpotifyContext();

    const {artist1, setArtist1, artist2, setArtist2} = useRapGameContext();

    useEffect(() => {
        if(artist1 && artist2){
            search_feat();
        }
    }, [artist1, artist2]);

    const handleChange = ({nativeEvent: {text}}: any) => {
        setValue(text)
        search_artist(text);
    }

    const search_feat = async () => {
        const promise = await fetch(`https://api.spotify.com/v1/search?q=${artist1.name}%20${artist2.name}&type=track`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        const response = await promise.json();
        compile_data(response.tracks.items)
    }

    const compile_data = (data: any) => {
        const results = data.map((item: any, key: number) => {
            let score = 0;
            const r = item.artists.map((artist: any, k: number) => {
                if((artist1.id === artist.id) || (artist2.id === artist.id)){
                    score += 1;
                }else{
                    score += 0;
                }
            })
            return score;
        });
        if(results.includes(2)){
            // @ts-ignore
            router.push('/games/rapgame/game/success', {artists: [artist1, artist2]});
        }else{
            // @ts-ignore
            router.push('/games/rapgame/game/error', {artists: [artist1, artist2]});
        }
    }



    const search_artist = async (v: string) => {
        if(v.length > 0){
            const promise = await fetch(`https://api.spotify.com/v1/search?q=${v}&type=artist`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const response = await promise.json();
            setSearch(response.artists.items)
        }
    }

    const handleArtistSelect = (item: any) => {
        if(artist1){
            setArtist2(item);
            setValue('');
        }else{
            setArtist1(item);
            setValue('');
        }
    }

    return(
        <View style={{padding: 20, flex: 1, justifyContent: 'space-between', alignItems: 'center', gap: 20}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: Dimensions.get('screen').width / 2 - (74/2), top: Dimensions.get('screen').height / 4 - (74/2)}}>
                <TouchableHighlight onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)} onPress={() => alert('enabling voice recognition')} style={{backgroundColor: "#4F46E5", padding: 10, borderRadius: 500}} underlayColor={"#6366f1"}>
                    <Ionicons name="mic" size={64} color="white" />
                </TouchableHighlight>
            </View>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
                {artist1 && (
                    <>
                        <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 10}} onPress={() => setArtist1(null)}>
                            <Image src={artist1.images[0].url ?? 'https://picsum.photos/64'} style={{height: 64, width: 64, borderRadius: 16}} />
                            <Text style={{color: 'white'}}>{artist1.name}</Text>
                        </Pressable>
                        {artist2 && (
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                <Image src={artist2.images[0].url ?? 'https://picsum.photos/64'} style={{height: 64, width: 64, borderRadius: 16}} />
                                <Text style={{color: 'white'}}>{artist2.name}</Text>
                            </View>   
                        )}
                    </>
                )}
            </View>
            {(!artist1 || !artist2) && 
                <View style={{gap: 10, width: '100%'}}>
                    <TextInput placeholder="Rechercher manuellement" placeholderTextColor={'white'} style={{color: 'white', backgroundColor: "#1E293B", width: '100%', borderRadius: 16, padding: 15}} onChange={handleChange} value={value} />
                    {search.length > 0 && 
                        <ScrollView 
                            style={{backgroundColor: "#1E293B", width: "100%", padding: 20, borderRadius: 16}}
                            contentContainerStyle={{gap: 5}}
                        >
                            {search.map((item, key) => (
                                <TouchableHighlight underlayColor={"#4F46E5"} onPress={() => handleArtistSelect(item)} style={{borderRadius: 16}}>
                                    <View style={{flexDirection: "row", alignItems: 'center', gap: 10, backgroundColor: "#1E293B"}}>
                                        <Image src={item.images[0]?.url ?? 'https://picsum.photos/48'} style={{height: 48, width: 48, borderRadius: 16}} />
                                        <Text style={{color: "white", fontSize: 20}}>{item.name}</Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                        </ScrollView>
                    }
                </View>
            }
        </View>
    )

}