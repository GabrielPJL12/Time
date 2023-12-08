import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import database from '../database/database.json'

type SignUpFormData = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

function SignUp({ navigation }: any): JSX.Element {
    const [formData, setFormData] = React.useState<SignUpFormData>({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        navigation.navigate("DailySchedule");
    }

    return (
        <View>
            <Text>Schedule+</Text>
            <Text>Schedule your day, stay organized</Text>
            <Text>Create an Account</Text>
            <TextInput placeholder="First Name" onChangeText={(text) => setFormData({...formData, first_name: text})}/>
            <TextInput placeholder="Last Name" onChangeText={(text) => setFormData({...formData, last_name: text})}/>
            <TextInput placeholder="Email" onChangeText={(text) => setFormData({...formData, email: text})}/>
            <TextInput placeholder="Password" onChangeText={(text) => setFormData({...formData, password: text})}/>
            <Pressable onPress={handleSubmit}>
                <Text>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default SignUp;