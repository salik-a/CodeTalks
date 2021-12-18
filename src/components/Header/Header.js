import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import styles from "./HeaderStyle"
import { useNavigation } from '@react-navigation/native';

const Header = ({ title = "Odalar", goBack = false }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            {goBack ? (<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Icon2
                    name="arrow-back"
                    color="#a570fb"
                    size={28}
                />
            </TouchableOpacity>) :
                (<View style={{ flex: 1 }}></View>)
            }
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}>
                <Icon
                    name="settings"
                    color="#a570fb"
                    size={28}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;