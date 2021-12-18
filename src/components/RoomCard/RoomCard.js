import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./RoomCardStyle"
const RoomCard = ({ room, onPress }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{room.name}</Text>
        </TouchableOpacity>
    )
};

export default RoomCard;