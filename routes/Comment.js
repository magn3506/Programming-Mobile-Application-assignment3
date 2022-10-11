import react, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  ScrollView
} from "react-native";
import styled from "styled-components/native";

import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import Post from "../Components/Post/Post";
// Using styled components for React-native
const Contaner = styled.ScrollView``;
const Comments = styled.View`
  padding: 0px 12px;
`;

const Comment = styled.Text``;

const InputComment = styled.TextInput`
  margin-top: 6px;
`;

import { Data } from "../data/data";

export default function CommentPage({ navigation }) {
  const post = Data[0];

  const [comments, setComments] = useState([
    { comment: "This is a comment" },
    { comment: "This is another comment" },
  ]);

  const [input, setInput] = useState();

  return (
    <Contaner>
      <NavigationMenu navigation={navigation} />
      <Post key={post.id} postData={post} navigation={navigation} />

      <Comments>
        <FlatList
          data={comments}
          renderItem={({ item }) => <Comment>{item.comment}</Comment>}
        />
        <InputComment
          value={input}
          onChangeText={(value) => setInput(value)}
          onSubmitEditing={(value) => {
            setComments([{ comment: input }, ...comments]);
            setInput();
          }}
          placeholder="Add comment here..."
        />
      </Comments>
    </Contaner>
  );
}
