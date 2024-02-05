import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Voximplant} from 'react-native-voximplant';

export default function CallActionBox({onHangupPress, call}) {

    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);
    const [cameraType, setCameraType] = useState(Voximplant.Hardware.CameraType.FRONT);
  
    const onReverseCamera = () => {

      // Voximplant.Hardware.CameraManager.getInstance().switchCamera(Voximplant.Hardware.CameraType.BACK);
      // console.warn('onReverseCamera');

      const newCameraType =
        cameraType === Voximplant.Hardware.CameraType.BACK
          ? Voximplant.Hardware.CameraType.FRONT
          : Voximplant.Hardware.CameraType.BACK;

      Voximplant.Hardware.CameraManager.getInstance().switchCamera(newCameraType);
      setCameraType(newCameraType);
    }
  
    // const onToggleCamera = () => {
    //   setIsCameraOn(currentValue => !currentValue);
    // };
  
    // const onToggleMicrophone = () => {
    //   setIsMicOn(currentValue => !currentValue);
    // };
    const onToggleCamera = () => {
      const newCameraState = !isCameraOn;
  
      // Turn on/off camera in Voximplant SDK
      Voximplant.Hardware.CameraManager.getInstance().enableCamera(newCameraState);
  
      // Update the state
      setIsCameraOn(newCameraState);
    };
  
    const onToggleMicrophone = () => {
      const newMicState = !isMicOn;
  
      // Turn on/off microphone in Voximplant SDK
      Voximplant.Hardware.AudioDeviceManager.getInstance().setAudioInput(newMicState);
  
      // Update the state
      setIsMicOn(newMicState);
    };

    return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onReverseCamera} style={styles.iconButton}>
            <Ionicons name="camera-reverse" size={30} color={'white'} />
          </TouchableOpacity>
    
          <TouchableOpacity onPress={onToggleCamera} style={styles.iconButton}>
            <MaterialIcons
              name={isCameraOn ? 'camera-off' : 'camera'}
            //   name={'camera'}
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
    
          <TouchableOpacity onPress={onToggleMicrophone} style={styles.iconButton}>
            <MaterialIcons
              name={isMicOn ? 'microphone-off' : 'microphone'}
            //   name={'microphone'}
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
    
          <TouchableOpacity
            onPress={onHangupPress}
            style={[styles.iconButton, {backgroundColor: 'red'}]}>
            <MaterialIcons name="phone-hangup" size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      );
}


const styles = StyleSheet.create({
    buttonsContainer: {
      backgroundColor: '#333333',
      padding: 20,
      paddingBottom: 40,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },
    iconButton: {
      backgroundColor: '#4a4a4a',
      padding: 15,
      borderRadius: 50,
    },
  });