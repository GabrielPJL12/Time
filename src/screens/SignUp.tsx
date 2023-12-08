import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import database from '../database/database.json'
import { Colors } from "react-native/Libraries/NewAppScreen";

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
        // create a new user_account in the .json database
        // then navigate to the DailySchedule screen
        database.user_accounts.push(formData);


        navigation.navigate("DailySchedule");
    }

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.title}>Schedule+</Text>
                <Text>Schedule your day, stay organized</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.createAccount}>Create Account</Text>
                <TextInput style={styles.TextInput} placeholder="First Name" onChangeText={(text) => setFormData({...formData, first_name: text})}/>
                <TextInput style={styles.TextInput} placeholder="Last Name" onChangeText={(text) => setFormData({...formData, last_name: text})}/>
                <TextInput style={styles.TextInput} placeholder="Email" onChangeText={(text) => setFormData({...formData, email: text})}/>
                <TextInput style={styles.TextInput} placeholder="Password" onChangeText={(text) => setFormData({...formData, password: text})}/>
                <Pressable style={styles.signUp} onPress={handleSubmit}>
                    <Text>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    },
    title: {
        fontSize: 40,
    },
    form: {
        backgroundColor: Colors.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        margin: 10,
        padding: 10,
    },
    createAccount: {
        color: "white",
        margin: 10,
        fontSize: 25,
    },
    TextInput: {
        backgroundColor: "#fff",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: 300,
        margin: 5,
        borderRadius: 10,
    },
    signUp: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        margin: 10,
    }
});

export default SignUp;