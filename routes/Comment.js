import react, { useState } from "react";

import {
  View,
  Text,
  Pressable
} from "react-native";
import styled from "styled-components/native";

import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import Post from "../Components/Post/Post";
// Using styled components for React-native
const Contaner = styled.ScrollView``;
const Comments = styled.View`
  padding: 0px 12px;
`;

const InputComment = styled.TextInput`
  margin-top: 6px;
`;

import { Data } from "../data/data";


const Comment = ({comment}) => {

  return (
    <View>
      <Text>{comment}</Text>
      <Pressable><Text>Delete</Text></Pressable>
    </View>
  )
}

export default function CommentPage({ navigation }) {
  const post = Data[0];

  const [comments, setComments] = useState([
    { comment: "This is a comment" },
    { comment: "This is another comment" },
  ]);

  const [input, setInput] = useState();
 
  return (
    <>
      <View>
        {comments.map(({index, comment}) => <Comment key={index} comment={comment}/>)}
      </View>
      <InputComment
        value={input}
        onChangeText={(value) => setInput(value)}
        onSubmitEditing={(value) => {
          setComments([{ comment: input }, ...comments]);
          setInput();
        }}
        placeholder="Add comment here..."
      />
    </>
  );
}
