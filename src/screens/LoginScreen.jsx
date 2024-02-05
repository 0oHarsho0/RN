import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
} from 'react-native';

import {Voximplant} from 'react-native-voximplant';

import {ACC_NAME, APP_NAME} from './../constant '

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const navigation = useNavigation();

    const voximplant = Voximplant.getInstance();

    useEffect(() => {
        const connect = async () => {
          const status = await voximplant.getClientState();
          if (status === Voximplant.ClientState.DISCONNECTED) {
            await voximplant.connect();
          } else if (status === Voximplant.ClientState.LOGGED_IN) {
            redirectHome();
          }
            console.log(status)
        };
    
        connect();
      }, []);
  
    const signIn = async () => {
      try {
        const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
        await voximplant.login(fqUsername, password);
  
        redirectHome();
      } catch (e) {
        console.log(e);
        Alert.alert(e.name, `Error code: ${e.code}`);
      }
        // console.warn("signIn")
    };
  
    const redirectHome = () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Contacts',
          },
        ],
      });
    };
  
    return (
      <View style={styles.page}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="username"
          placeholderTextColor="#008080" 
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          placeholderTextColor="#008080" 
          style={styles.input}
          secureTextEntry
        />
  
        <Pressable style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    page: {
      padding: 10,
      alignItems: 'stretch',
      flex: 1,
      justifyContent: 'center',
    },
    input: {
      color:"#003434",
      backgroundColor: 'white',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    button: {
      // backgroundColor: 'dodgerblue',
      backgroundColor: '#40e0d0',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      // fontWeight: 900,
    },
    buttonText:{
      fontWeight:"bold",
    }
  });
  
  export default LoginScreen;