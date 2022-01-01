import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import styles from "./ChatRoomStyle"
import firestore from "@react-native-firebase/firestore"
import { FAB } from "react-native-paper";
import ModalCard from "../../components/ModalCard";
import Header from "../../components/Header"
import { useNavigation } from "@react-navigation/core"
import uuid from 'react-native-uuid';
import RoomCard from "../../components/RoomCard/RoomCard";


const ChatRooms = () => {

    const navigation = useNavigation();
    const column = 2;
    const [visible, setVisible] = React.useState(false);
    const [rooms, setRooms] = React.useState([]);

    React.useEffect(() => {
        firestore().collection("chatrooms").onSnapshot((snapshot) => {
            setRooms(snapshot.docs.map((room) => ({ data: room._data, roomId: room.id })).sort((a, b) => a.data.date > b.data.date))
            //console.log("snap", snapshot.docs.map((room) => room.id))
        })
    }, [])
   
    const handleAddRoom = async (content) => {
         firestore().collection("chatrooms").add({
            name: content,
            date: new Date().toISOString(),
        })
        setVisible(!visible);
    }

    const handleVisible = () => {
        setVisible(!visible);
    }

    const renderItem = ({ item }) => (<RoomCard room={item.data} onPress={()=>navigation.navigate("Chat",item)} />)

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={rooms}
                renderItem={renderItem}
                numColumns={column}
                keyExtractor={()=> uuid.v4()}
            />

            <FAB icon="plus" style={{ position: "absolute", bottom: 20, right: 20, backgroundColor: "#a570fb" }} onPress={handleVisible} color="white" />
            <ModalCard
                visible={visible}
                onClose={() => setVisible(!visible)}
                onSend={handleAddRoom}
                
            />
        </View>
    )
}

export default ChatRooms;