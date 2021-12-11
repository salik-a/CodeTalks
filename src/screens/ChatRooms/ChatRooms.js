import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./ChatRoomStyle"
import auth from "@react-native-firebase/auth"

const ChatRooms = ({ navigation }) => {

    const signIn = () => {
        auth()
            .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then((res) => {
                //console.log(res);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const signOut = () => {
        auth()
            .signOut()
            .then((res) => {
                //console.log(res);
                //navigation.navigate("Login")
            })
            .catch(error => {
                console.error(error);
            });
    };
    console.log(auth().currentUser)
    return (
        <View>
            <Text>ChatRooms</Text>
            <Button title="sign out" onPress={signOut} />
        </View>
    )
}

export default ChatRooms;