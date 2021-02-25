import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Message } from "../types";
import moment from "moment";
import { Colors } from "react-native/Libraries/NewAppScreen";

export type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage(props: ChatMessageProps) {
  const { message } = props;

  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}
      >
       {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 5
  },
  message: {
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey'
  }
});
