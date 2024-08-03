import { Controller, useForm } from "react-hook-form"
import { View } from "react-native";
import CustomTextInput from "../fields/TextInput";
import CustomPasswordInput from "../fields/PasswordInput";
import CustomButton from "@/components/_global/Button";

export default function LoginForm(){

    const {register, handleSubmit, control} = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return(
        <View>
            <CustomTextInput placeholder="Username Or Email" name="username" rules={{required: true}} />
            <CustomPasswordInput placeholder="Password" name="password" rules={{required: true}} />
            <CustomButton title={'Login'} onPress={handleSubmit(onSubmit)} />
        </View>
    )

}