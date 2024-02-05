/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import ContactScreen from './src/screens/ContactScreen';
import CallingScreen from './src/screens/CallingScreen';
import InComingCallScreen from './src/screens/InComingCallScreen';
import CallScreen from './src/screens/CallScreen';
import Navigation from './src/navigation/Navigation';


function App(){

  return (
    <>
      {/* <StatusBar
        barStyle={'dark-content'}
      /> */}
      <StatusBar />
      {/* <ContactScreen /> */}
      {/* <CallingScreen /> */}
      {/* <InComingCallScreen /> */}
      {/* <CallScreen /> */}

      <Navigation />
      
    </>
  );
}


export default App;
