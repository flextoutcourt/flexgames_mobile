import CustomButton from "@/components/_global/Button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Page(){

    const router = useRouter();

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1, padding: 20, gap: 20}}>
                <Text style={{fontSize: 32, color: 'white'}}>Comment qu'on joue ?</Text>
                <Text style={{color: 'white', fontSize: 18}}>Rien de plus simple que ce jeu !</Text>
                <Text style={{color: "white", fontSize: 18, textAlign: 'justify'}}>
                    Le premier joueur va donner le nom d'un artiste, puis le joueur suivant va devoir donner un deuxième artiste ayant réalisé une collaboration avec le premier artiste puis le troisième joueur devra a son tour donner le nom d'un artiste ayant collaboré avec le deuxième artiste.
                </Text>
                <Text style={{color: "white", fontSize: 18, textAlign: 'justify'}}>
                    Exemple : Le jeu commence sur <Text style={{color: "red"}}>"SCH"</Text>, le deuxième joueur dis <Text style={{color: "red"}}>"VALD"</Text>, le troisième joueur doit donner une collaboration avec <Text style={{color: "red"}}>"VALD"</Text> et ainsi de suite.
                </Text>
                <Text style={{color: "white", fontSize: 18, textAlign: 'justify'}}>
                    Dès qu'un joueur se trompe, il est eliminé pour la manche en cours et la personne suivant prends sa place.
                </Text>
                <Text style={{color: "white", fontSize: 18, textAlign: 'justify'}}>
                    Le gagnant est la dernière personne encore en vie.
                </Text>
            </View>
            <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
                <CustomButton onPress={() => router.push('/games/rapgame/game')} title={"New game"} />
            </View>
        </View>
    )

}