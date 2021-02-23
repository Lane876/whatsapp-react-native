import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

export default function ChatRoomScreen() {


    const route = useRoute()

    console.log(route.params);
    

    return (
        <View>
            <Text>Chat room</Text>
        </View>
    )
}
