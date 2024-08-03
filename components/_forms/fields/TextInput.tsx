import { Controller, useForm } from "react-hook-form"
import { Text, TextInput, View } from "react-native";

export interface CustomTextInputProps {
    placeholder: string;
    name: string;
    rules: {}
}

export default function CustomTextInput({placeholder, name, rules}:CustomTextInputProps ){

    const {control, formState: {errors}} = useForm();
    
    return(
        <View>
            <Text style={{color: 'white', fontSize: 20, marginBottom: 5}} nativeID={name} >{placeholder}</Text>
            <Controller
                control={control}
                rules={rules}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        aria-labelledby={name}
                        style={{backgroundColor: '#1E293B', borderRadius: 16, padding: 15, borderColor: "white", borderWidth: 2, color: "white", fontSize: 16}}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                    />
                )}
                name={name}
            />
            {errors && errors[name] && <Text>{errors[name].message}</Text>}
        </View>
    )

}