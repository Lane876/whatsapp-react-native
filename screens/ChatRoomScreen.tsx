import React from 'react'
import { useRoute } from '@react-navigation/native'
import { FlatList, ImageBackground } from 'react-native'
import chatRooomData from '../data/Chats'
import ChatMessage from '../components/ChatMessage'
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputBox'

export default function ChatRoomScreen() {

    const route = useRoute()

    return (
        <ImageBackground style={{width: '100%', height:"100%"}} source={BG}>
            <FlatList
            data={chatRooomData.messages}
            renderItem={({item})=> <ChatMessage message={item}/> }
            inverted
            />
            <InputBox/>
        </ImageBackground>
    )
}
