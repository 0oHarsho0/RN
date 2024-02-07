import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
} from 'react-native';

function Login({username, setUsername, password, setPassword, signIn}) {
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
  )
}

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

export default Login
