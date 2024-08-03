import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { CustomTextInputProps } from "./TextInput";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function CustomPasswordInput({placeholder, name, rules}: CustomTextInputProps){

    const {control, formState: {errors}} = useForm();

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }
    
    return(
        <View>
            <Controller
                control={control}
                rules={rules}
                render={({field: {onChange, onBlur, value}}) => (
                    <View style={{position: 'relative'}}>
                        <TextInput
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            secureTextEntry={!show}
                        />
                        <Ionicons name={show ? 'lock-closed' : 'lock-open' } onPress={handleShow} />
                    </View>
                )}
                name={name}
            />
            {errors && errors[name] && <Text>{errors[name].message}</Text>}
        </View>
    )

}