import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native"
import styles from "./ModalCardStyle"
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const ModalCard = ({ visible, onClose, onSend }) => {
    const [text, setText] = React.useState(null)
    function handleSend() {
        if (!text) {
            return
        }
        onSend(text);
        setText(null);
    }
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection="down"
        >
            <View style={styles.container}>
                <View style={styles.inputContainer} >
                    <View style={styles.input}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Oda Adı Gir..."
                            onChangeText={setText}
                            multiline
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleSend}>
                        <Icon name="comment-arrow-right" size={32} color={"#a570fb"} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default ModalCard;