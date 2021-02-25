import React from 'react'
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Colors from '../constants/Colors'

export default function InputBox() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey'/>
                <TextInput style={styles.textInput}/>
                <Entypo name='attachment' size={24} color='grey' style={styles.icons}/>
                <Fontisto name='camera' size={24} color='grey' style={styles.icons}/>
            </View>
            <View  style={styles.buttonContainer}>
                <MaterialCommunityIcons name='microphone' size={28} color='white' />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    mainContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
        flex: 1
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    icons:{
        marginHorizontal: 5
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: 'center'
    }
})