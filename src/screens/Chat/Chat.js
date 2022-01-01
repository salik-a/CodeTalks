import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./ChatStyle"
import { GiftedChat, Send } from 'react-native-gifted-chat'
import { useRoute } from "@react-navigation/core";
import Header from "../../components/Header"
import firestore from "@react-native-firebase/firestore"
import auth from "@react-native-firebase/auth"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Chat = () => {

    const route = useRoute();
    const data = route.params.data;
    const roomId = route.params.roomId;
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState(auth().currentUser);

    React.useEffect(() => {
        firestore().doc("chatrooms/" + roomId).onSnapshot((snap) => setMessages(snap.data()?.messages ?? []))
    }, [])

    const onSend = (m = []) => {
       
        firestore().doc("chatrooms/" + roomId).set({
            messages: GiftedChat.append(messages, m)
        }, {
            merge: true
        })
        console.log(messages)
    }
    const renderSend = (sendProps) => {

        return (
            <Send
                {...sendProps}
            >
                <View style={{ marginRight: 10, marginBottom: 5 }}>
                    <Icon name="send" size={32} color={"#a570fb"} />
                </View>
            </Send>
        );

    }


    return (
        <View style={styles.container}>
            <Header title={data.name} />
            {/* <View style={{ flex: 1 }}>

            </View>
            <View style={styles.inputContainer} >
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Mesaj..."
                        onChangeText={setMessage}
                        multiline
                        autoCapitalize="sentences"
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Icon name="send" size={32} color={"#a570fb"} />
                </TouchableOpacity>
            </View> */}
            <GiftedChat
                messages={messages.map(m => ({ ...m, createdAt: m.createdAt.toDate() }))}
                onSend={messages => onSend(messages)}
                user={{
                    _id: user.uid,
                    name: user.displayName
                }}
                renderSend={renderSend}
                placeholder="Mesaj ..."
                locale={"tr"}
                renderUsernameOnMessage={true}

            />

        </View>
    )
}

export default Chat;