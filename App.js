import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, ScrollView } from "react-native";

// ROUTES
import Home from './routes/Home'
import Comments from './routes/Comments'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
     <Stack.Navigator initialRouteName="Comments">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// * REFLECTION NOTES
// New way of thinking navigation
