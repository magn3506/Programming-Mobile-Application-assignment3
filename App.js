import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import Post from "./Components/Post/Post";
import { Data } from "./data/data";
import Ionicons from "@expo/vector-icons/Ionicons";

const CaptionModal = styled.Modal``;

const CaptionText = styled.Text`
  text-align: center;
  font-weight: 600;
  margin-bottom: 24px;
`;
const CaptionInput = styled.TextInput`
  border: 1px solid lightgray;
  width: 300px;
  height: 30px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 6px;
`;

const CaptionButton = styled.Pressable`
  background: ${({ isModalButtonActive }) =>
    isModalButtonActive ? "orange" : "lightgrey"};

  width: 200px;
  margin: 24px auto;
  padding: 6px 12px;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [caption, setCaption] = useState(undefined);
  const [isCaptionModalOpen, setIsCaptionModalOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* CAPTION MODAL */}
      {isCaptionModalOpen && (
        <CaptionModal>
          <Ionicons
            onPress={() => {
              setIsCaptionModalOpen(false);
            }}
            name="arrow-back-outline"
            size={25}
            color='black'
            style={{marginLeft: 12}}
          />
          <CaptionText>Add a caption blow!</CaptionText>
          <CaptionInput
            value={caption}
            maxLength={50}
            placeholder="Write.."
            onChangeText={(newCaption) => {
              setCaption(newCaption);
            }}
          />
          <CaptionButton
            onPress={() => {
              if (caption) {
                setIsCaptionModalOpen(false);
              }
            }}
            isModalButtonActive={caption}
          >
            <ButtonText>SUBMIT</ButtonText>
          </CaptionButton>
        </CaptionModal>
      )}

      <View style={styles.InfoBar}>
        <Text style={styles.likeCounterText}>Like counter: {likeCounter}</Text>
        <Text style={styles.likeCounterText}>
          Caption: {caption && caption}
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <StatusBar />
        {Data.map((post) => (
          <Post
            key={post.id}
            postData={post}
            likeCounterState={{ likeCounter, setLikeCounter }}
            setIsCaptionModalOpen={setIsCaptionModalOpen}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    marginTop: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  InfoBar: {
    backgroundColor: "black",
    justifyContent: "center",
    padding: 12,
    width: "100%",
  },
  likeCounterText: {
    fontSize: 10,
    color: "white",
    fontWeight: "900",
  },
});
