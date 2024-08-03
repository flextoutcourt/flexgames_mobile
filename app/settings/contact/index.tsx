import ContactForm from "@/components/_forms/contact/ContactForm";
import CustomTextInput from "@/components/_forms/fields/TextInput";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Page(){

    return(
        <View style={{padding: 20, gap: 20}}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                <Ionicons name="mail-outline" size={32} color="white" />
                <Text style={{color: "white", fontSize: 20}}>Nous contacter</Text>
            </View>
            <View>
                <ContactForm />
            </View>
        </View>
    )

}