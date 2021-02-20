import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ChatRoom } from '../types'

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

export default function ChatListItem( props: ChatRoom) {
    const { chatRoom } = props
    const user = chatRoom.users[1]

    return (
        <View>
            <Image source={{uri: user.imageUri}} style={styles.avatar}/>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar:{
        width: 50,
        height: 50
    }
})
