import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import CallActionBox from './CallActionBox'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Voximplant} from 'react-native-voximplant';

function Calling({goBack, remoteVideoStreamId, localVideoStreamId, user, callStatus, onHangupPress, call}) {
  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25} />
      </Pressable>

      <Voximplant.VideoView
        videoStreamId={remoteVideoStreamId}
        style={styles.remoteVideo}
      />

      <Voximplant.VideoView
        videoStreamId={localVideoStreamId}
        showOnTop={true}
        scaleType={Voximplant.RenderScaleType.SCALE_FILL}
        style={styles.localVideo}
      />

      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>{callStatus}</Text>
      </View>

      <CallActionBox onHangupPress={onHangupPress} call={call} />
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
      height: '100%',
      backgroundColor: '#7b4e80',
    },
    cameraPreview: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    localVideo: {
      width: 100,
      height: 150,
      backgroundColor: 'transparent',
      // backgroundColor: 'black',
  
      position: 'absolute',
      right: 10,
      top: 100,
    },
    remoteVideo: {
      backgroundColor: 'black',
      borderRadius: 10,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 100,
      zIndex: 0,
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 50,
      marginBottom: 15,
    },
    phoneNumber: {
      fontSize: 20,
      color: 'white',
    },
    backButton: {
      position: 'absolute',
      top: 50,
      left: 10,
      zIndex: 10,
    },
  });

export default Calling