import { StyleSheet, View, Text, Image, Button } from "react-native";
import styled from "styled-components/native";

// Using styled components for React-native
const Contaner = styled.View`
  flex-direction: row;
`;
const BoldText = styled.Text`
  color: grey;
  font-weight: 600;
  font-size: 12px;
`;
const SmallText = styled.Text`
  color: #9b9b9b;
  font-size: 10px;
`;
const MicroText = styled.Text`
  color: #9b9b9b;
  font-size: 10px;
`;

export default function NavigationMenu({ navigation }) {
  return (
    <Contaner>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </Contaner>
  );
}
