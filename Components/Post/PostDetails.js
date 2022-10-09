import { StyleSheet, View, Text, Image} from "react-native";
import styled from 'styled-components/native'

// Using styled components for React-native
const Contaner = styled.View`
`
const BoldText = styled.Text`
  color: grey;
  font-weight: 600;
  font-size: 12px;
`
const SmallText = styled.Text`
  color: #9B9B9B;
  font-size: 10px;
`
const MicroText = styled.Text`
  color: #9B9B9B;
  font-size: 10px;
`

export default function PostDetails() {
  return (
    <Contaner>
        <BoldText>10.0000 Views</BoldText>
        <BoldText>Username instagram template #template</BoldText>
        <SmallText>View all comments</SmallText>
        <MicroText>5 days ago</MicroText>
    </Contaner>
  );
}

