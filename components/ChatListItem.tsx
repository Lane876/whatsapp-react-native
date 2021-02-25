import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { ChatRoom } from "../types";
import moment from "moment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

export default function ChatListItem(props: ChatRoom) {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id, name: user.name });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  midContainer: {
    justifyContent: "space-around",
  },
  leftContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        color: "grey",
      },
      android: {
        fontSize: 14,
        color: "grey",
      },
    }),
  },
  time: {
    fontSize: 14,
    color: "grey",
    ...Platform.select({
      ios: {
        fontSize: 14,
        color: "grey",
      },
      android: {
        fontSize: 12,
        color: "grey",
      },
    }),
  },
});
