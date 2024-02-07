// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import bg from '../../assets/images/ios_bg.png';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Feather from 'react-native-vector-icons/Feather';
// import {useRoute, useNavigation} from '@react-navigation/native';
// import {Voximplant} from 'react-native-voximplant';

// export default function InComingCallScreen() {
//   const [caller, setCaller] = useState('');
//   const route = useRoute();
//   const navigation = useNavigation();
//   const {call} = route.params;

//   useEffect(() => {
//     setCaller(call.getEndpoints()[0].displayName);

//     call.on(Voximplant.CallEvents.Disconnected, callEvent => {
//       navigation.navigate('Contacts');
//     });

//     return () => {
//       call.off(Voximplant.CallEvents.Disconnected);
//     };
//   }, []);

//   const onDecline = () => {
//     call.decline();
//   };

//   const onAccept = () => {
//     navigation.navigate('Calling', {
//       call,
//       isIncomingCall: true,
//     });
//   };

//   return (
//     <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
//       <Text style={styles.name}>{caller}</Text>
//       <Text style={styles.phoneNumber}>WhatsApp video...</Text>

//       {/* <View style={[styles.row, {marginTop: 'auto'}]}>
//             <View style={styles.iconContainer}>
//               <Ionicons name="alarm" color="white" size={30} />
//               <Text style={styles.iconText}>Remind me</Text>
//             </View>
//             <View style={styles.iconContainer}>
//               <Entypo name="message" color="white" size={30} />
//               <Text style={styles.iconText}>Message</Text>
//             </View>
//           </View> */}

//       <View style={[styles.row, {marginTop: 'auto'}]}>
//         {/* Decline Button */}
//         <TouchableOpacity onPress={onDecline} style={styles.iconContainer}>
//           <View style={styles.iconButtonContainer}>
//             <Feather name="x" color="white" size={40} />
//           </View>
//           <Text style={styles.iconText}>Decline</Text>
//         </TouchableOpacity>

//         {/* Accept Button */}
//         <TouchableOpacity onPress={onAccept} style={styles.iconContainer}>
//           <View
//             style={[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]}>
//             <Feather name="check" color="white" size={40} />
//           </View>
//           <Text style={styles.iconText}>Accept</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   name: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 100,
//     marginBottom: 15,
//   },
//   phoneNumber: {
//     fontSize: 20,
//     color: 'white',
//   },
//   bg: {
//     backgroundColor: 'red',
//     flex: 1,
//     alignItems: 'center',
//     padding: 10,
//     paddingBottom: 50,
//   },

//   row: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   iconText: {
//     color: 'white',
//     marginTop: 10,
//   },
//   iconButtonContainer: {
//     backgroundColor: 'red',
//     padding: 15,
//     borderRadius: 50,
//     margin: 10,
//   },
// });



import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
} from 'react-native';
import bg from '../../assets/images/ios_bg.png';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Voximplant} from 'react-native-voximplant';
import InComingCall from '../components/InComingCall';

export default function InComingCallScreen() {
  const [caller, setCaller] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
  const {call} = route.params;

  useEffect(() => {
    setCaller(call.getEndpoints()[0].displayName);

    call.on(Voximplant.CallEvents.Disconnected, callEvent => {
      navigation.navigate('Contacts');
    });

    return () => {
      call.off(Voximplant.CallEvents.Disconnected);
    };
  }, []);

  const onDecline = () => {
    call.decline();
  };

  const onAccept = () => {
    navigation.navigate('Calling', {
      call,
      isIncomingCall: true,
    });
  };

  return (
    <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
        <InComingCall onAccept={onAccept} onDecline={onDecline} caller={caller} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 50,
  },
});
