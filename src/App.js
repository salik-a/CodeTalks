import React from 'react';
import {
  View,
  Button,
  Text,

} from 'react-native';
import auth from "@react-native-firebase/auth"

const App = () => {

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
      }, 1000)
    })
  }, [])


  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then((res) => {
        //console.log(res);
      })
      .catch(error => {

        console.error(error);
      });
  };
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
      })
      .catch(error => {
        console.error(error);
      });
  };
  const checkUser = () => {
    const user = auth().currentUser;
    //console.log("check", user)
  };


  if (user == "loading") {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  if (user == "true") {
    return (
      <View>
        <Text>user var</Text>
        <Button title="sign in" onPress={signIn} />
        <Button title="sign out" onPress={signOut} />
      </View>
    )
  }

  if (user == "false") {
    return (
      <View>
        <Text>user yok</Text>
        <Button title="sign in" onPress={signIn} />
        <Button title="sign out" onPress={signOut} />
      </View>
    )
  }


  return (
    <View>
      <Text>App</Text>
      <Button title="sign up" onPress={signUp} />
      <Button title="sign in" onPress={signIn} />
      <Button title="sign out" onPress={signOut} />
      <Button title="check" onPress={checkUser} />
    </View>
  );
};


export default App;
