import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Voximplant} from 'react-native-voximplant';

export default function CallActionBox({onHangupPress, call}) {

    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);
    const [cameraType, setCameraType] = useState(Voximplant.Hardware.CameraType.FRONT);
  
    const onReverseCamera = () => {
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
      setIsCameraOn(currentValue => {
        const newCameraState = !currentValue;
        call.current.sendVideo(newCameraState);
        return newCameraState;
      });
    };
    
    const onToggleMicrophone = () => {
      setIsMicOn(currentValue => {
        const newMicState = !currentValue;
        call.current.sendAudio(newMicState);
        return newMicState;
      });
    };
    
    


    return (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onReverseCamera} style={styles.iconButton}>
            <Ionicons name="camera-reverse" size={30} color={'white'} />
          </TouchableOpacity>
    
          <TouchableOpacity onPress={onToggleCamera} style={styles.iconButton}>
            <MaterialIcons
              name={isCameraOn ? 'camera' : 'camera-off'}
            //   name={'camera'}
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
    
          <TouchableOpacity onPress={onToggleMicrophone} style={styles.iconButton}>
            <MaterialIcons
              name={isMicOn ? 'microphone' : 'microphone-off'}
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