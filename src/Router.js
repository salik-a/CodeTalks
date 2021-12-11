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
        auth().onAuthStateChanged(users => {
            setTimeout(() => {
                if (users) {
                    console.log("user var")
                    setUser("true")
                } else {
                    console.log("yok")
                    setUser("false")
                }
            }, 1250)
        })
    }, [])



    return (
        <NavigationContainer>

            {user == "loading" ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                </Stack.Navigator>
            ) : (user == "false" ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} options={{ presentation: "fullScreenModal" }} />
                    <Stack.Screen name="Sign" component={Sign} options={{ presentation: "fullScreenModal" }} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="ChatRooms" component={ChatRooms} />
                    <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>
            )
            )}

        </NavigationContainer>
    );
}

export default App;