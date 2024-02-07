// import React, {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/core';

// import {Voximplant} from 'react-native-voximplant';
// import dummyContacts from '../../assets/data/contacts.json';

// // export default function ContactScreen({route}) {
// export default function ContactScreen() {
  
//   // const { username } = route.params;
//   // console.warn(username)

//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

//   const navigation = useNavigation();
//   const voximplant = Voximplant.getInstance();

//   useEffect(() => {
//     voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
//       navigation.navigate('IncomingCall', {call: incomingCallEvent.call});
//     });

//     return () => {
//       voximplant.off(Voximplant.ClientEvents.IncomingCall);
//     };
//   }, []);

//   useEffect(() => {
//     const newContacts = dummyContacts.filter(contact =>
//       contact.user_display_name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase()),
//     );
//     setFilteredContacts(newContacts);
//   }, [searchTerm]);

//   const callUser = user => {
//     // console.warn(user);
//     // navigation.navigate('Calling', {user,username});
//     navigation.navigate('Calling', {user});
//   };

//   return (
//     <View style={styles.page}>
//       <TextInput
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//         style={styles.searchInput}
//         placeholder="Search..."
//         placeholderTextColor="#000"
//       />
//       <FlatList
//         data={filteredContacts}
//         renderItem={({item}) => (
//           <TouchableOpacity onPress={() => callUser(item)}>
//             <Text style={styles.contactName}>{item.user_display_name}</Text>
//           </TouchableOpacity>
//         )}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   searchInput: {
//     color: '#003434',
//     backgroundColor: '#dedede',
//     padding: 10,
//     borderRadius: 10,
//   },
//   page: {
//     padding: 15,
//   },
//   contactName: {
//     color: '#003434',
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   separator: {
//     width: '100%',
//     height: 1,
//     backgroundColor: '#dedede',
//   },
// });



import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

import {Voximplant} from 'react-native-voximplant';
import dummyContacts from '../../assets/data/contacts.json';
import Contact from '../components/Contact';

export default function ContactScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  const navigation = useNavigation();
  const voximplant = Voximplant.getInstance();

  useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
      navigation.navigate('IncomingCall', {call: incomingCallEvent.call});
    });

    return () => {
      voximplant.off(Voximplant.ClientEvents.IncomingCall);
    };
  }, []);

  useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

  const callUser = user => {
    navigation.navigate('Calling', {user});
  };

  return (
    <Contact searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredContacts={filteredContacts} callUser={callUser} />
  );
}