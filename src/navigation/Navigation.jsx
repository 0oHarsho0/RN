import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CallScreen from '../screens/CallScreen';
import ContactScreen from '../screens/ContactScreen';
import CallingScreen from '../screens/CallingScreen';
import InComingCallScreen from '../screens/InComingCallScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Contacts" component={ContactScreen} />
    
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen name="Call" component={CallScreen} />
              <Stack.Screen name="Calling" component={CallingScreen} />
              <Stack.Screen name="IncomingCall" component={InComingCallScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      );
}
