import React,{useEffect, useState} from "react";
import { View, Text, } from "react-native";
import { Avatar,Title, Subheading, Button } from "react-native-paper";
import styles from "./SettingsStyle"
import auth from "@react-native-firebase/auth"

const Settings = () => {

    const [user, setUser] = useState(auth().currentUser);
    console.log("user",user)
  
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


    return (
        <View style={styles.container}>
            <Avatar.Text label={user.displayName.split("",2)} />
            <Title>{user.displayName}</Title>
            <Subheading>{user.email}</Subheading>
            <Button onPress={signOut}>Çıkış Yap</Button>
            
        </View>
    )
}

export default Settings;