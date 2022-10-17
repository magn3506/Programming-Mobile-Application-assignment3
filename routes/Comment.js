import react, { useState } from "react";
import uuid from "react-native-uuid";
import { View, Text, TextInput, Pressable } from "react-native";
import styled from "styled-components/native";

// Using styled components for React-native
const CommentContainer = styled.View`
  flex-direction: row;
  padding: 12px;
  align-items: center;
  border: 1px solid lightgray;
  justify-content: space-between;
`;
const CommentText = styled.Text`
  margin-right: 12px;
`;
const CommentDeleteButton = styled.Pressable`
  background-color: red;
  padding: 3px 6px;
`;

const CommentDeleteText = styled.Text`
  color: white;
  font-weight: 900;
`;

const InputComment = styled.View`
  margin-top: 6px;
  background-color: white;
  padding: 12px;
`;

// Comment subComponent
const Comment = ({ comment, state: { setComments, comments } }) => {
  return (
    <CommentContainer>
      <CommentText>{comment.comment}</CommentText>
      <CommentDeleteButton
        onPress={() => {
          // Delete slected comment by its id
          setComments(comments.filter((obj) => obj.id !== comment.id));
        }}
      >
        <CommentDeleteText>Delete</CommentDeleteText>
      </CommentDeleteButton>
    </CommentContainer>
  );
};

// CommentPage
export default function CommentPage({ navigation }) {
  const [comments, setComments] = useState([
    { id: uuid.v4(), comment: "This is a comment" },
    { id: uuid.v4(), comment: "This is another comment" },
  ]);

  const [input, setInput] = useState();

  return (
    <>
      <View>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            state={{ setComments, comments }}
          />
        ))}
      </View>
      <InputComment>
        <TextInput
          value={input}
          onChangeText={(value) => setInput(value)}
          onSubmitEditing={(value) => {
            setComments([
              {
                id: uuid.v4(),
                comment: input,
              },
              ...comments,
            ]);
            setInput();
          }}
          placeholder="Add comment here and submit..."
        />
      </InputComment>
    </>
  );
}
