import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./ChatRoomStyle"
import auth from "@react-native-firebase/auth"
import { FAB } from "react-native-paper";
import ModalCard from "../../components/ModalCard";



const ChatRooms = ({ navigation }) => {

    const [visible, setVisible] = React.useState(false);

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

    const handleAddRoom = () => {

    }

    function handleModalVisible() {
        setVisible(!visible);
    }

    function handleSendContent(content) {
        handleModalVisible()

    }

    return (
        <View style={styles.container}>
            <Text>ChatRooms</Text>
            <Button title="sign out" onPress={signOut} />

            <FAB icon="plus" style={{ position: "absolute", bottom: 20, right: 20, backgroundColor: "#a570fb" }} onPress={handleModalVisible} color="white" />
            <ModalCard
                visible={visible}
                onClose={handleModalVisible}
                onSend={handleSendContent}
            />
        </View>
    )
}

export default ChatRooms;