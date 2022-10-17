import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ROUTES
import HomePage from './routes/Home'
import CommentPage from './routes/Comment'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
     <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CommentPage" component={CommentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// * REFLECTION NOTES
// New way of thinking navigation
