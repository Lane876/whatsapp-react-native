import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';

import { Text, View } from '../components/Themed';
import chatRooms from '../data/ChatRooms'

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
     <FlatList
     data={chatRooms}
     renderItem={({item})=> <ChatListItem chatRoom={item}/>}
     keyExtractor={(item)=> item.id}
     style={{width: '100%'}}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
