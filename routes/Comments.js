import { StyleSheet, View, Text, Image} from "react-native";
import styled from 'styled-components/native'

import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";

// Using styled components for React-native
const Contaner = styled.View`
`

export default function PostDetails({navigation}) {
  return (
    <Contaner>
        <NavigationMenu  navigation={navigation} />
        <Text>COMMENTS PAGE</Text>
    </Contaner>
  );
}

