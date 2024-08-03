import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { CustomTextInputProps } from "./TextInput";

export default function CustomTextArea({placeholder, name, rules}: CustomTextInputProps){

    const {control, formState: {errors}} = useForm();
    
    return(
        <View>
            <Text style={{fontSize: 20, color: 'white', marginBottom: 5}}>{placeholder}</Text>
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
                        multiline
                        numberOfLines={4}
                        collapsable
                        textAlignVertical='top'
                    />
                )}
                name={name}
            />
            {errors && errors[name] && <Text>{errors[name].message}</Text>}
        </View>
    )

}