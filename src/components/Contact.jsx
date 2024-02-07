import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Contact({searchTerm, setSearchTerm, filteredContacts, callUser}) {
  return (
    <View style={styles.page}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#000"
      />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => callUser(item)}>
            <Text style={styles.contactName}>{item.user_display_name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    searchInput: {
      color: '#003434',
      backgroundColor: '#dedede',
      padding: 10,
      borderRadius: 10,
    },
    page: {
      padding: 15,
    },
    contactName: {
      color: '#003434',
      fontSize: 16,
      marginVertical: 10,
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: '#dedede',
    },
  });
  

export default Contact