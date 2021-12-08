// In App.js in a new projec
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Sign from './screens/Sign';
import Splash from './screens/Splash';
import ChatRooms from './screens/ChatRooms';
import Settings from './screens/Settings';
import auth from "@react-native-firebase/auth"
const Stack = createNativeStackNavigator();



function App() {
    const [user, setUser] = React.useState("loading");
    React.useEffect(() => {
        auth().onAuthStateChanged(user => {
            setTimeout(() => {
                if (user) {
                    console.log("user var")
                    setUser("true")
                } else {
                    console.log("yok")
                    setUser("false")
                }
            }, 1250)
        })
    }, [])

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign" component={Sign} />
            </Stack.Navigator>
        );
    }
    const MainStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ChatRooms" component={ChatRooms} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user == "loading" ? (<Stack.Screen name="Splash" component={Splash} />) : (
                    user == "false" ? (<Stack.Screen name="AuthStack" component={AuthStack} />) : (
                        <Stack.Screen name="MainStack" component={MainStack} />
                    )
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;