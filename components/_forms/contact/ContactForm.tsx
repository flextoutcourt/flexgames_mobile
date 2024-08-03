import { Form, FormProvider, useForm } from "react-hook-form";
import CustomTextInput from "../fields/TextInput";
import { View } from "react-native";
import CustomButton from "@/components/_global/Button";
import CustomTextArea from "../fields/Textarea";

export default function ContactForm(){

    const methods = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return(
        <FormProvider {...methods}>
            <View style={{gap: 20}}>
                <CustomTextInput placeholder={'Motif'} name="motif" rules={{}} />
                <CustomTextArea placeholder="Message" name="message" rules={{}} />
                <CustomButton onPress={methods.handleSubmit(onSubmit)} title={"Submit"} /> 
            </View>
        </FormProvider>
    )

}