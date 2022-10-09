import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Alert} from "react-native";
import MCIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostFooter({likeCounterState: {likeCounter, setLikeCounter}, setIsCaptionModalOpen}) {
  
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);


  return (
    <View style={styles.ctaContainr}>
      <View style={styles.ctaLeftCol}>
        <Ionicons
          onPress={() => {
            setIsLiked(!isLiked)
            if(isLiked) {
              setLikeCounter(likeCounter - 1)
            } else {
              setLikeCounter(likeCounter + 1)
            }
          }}
          style={[styles.ctaLeftCol.leftColIcon]}
          name="heart"
          size={25}
          color={isLiked ? 'red': 'grey'}
        />
        <Ionicons
          onPress={() => setIsCaptionModalOpen(true)}
          style={[styles.ctaIcons, styles.ctaLeftCol.leftColIcon]}
          name="chatbubble-outline"
          size={25}
          color="black"
        />
        <Ionicons
          style={[styles.ctaIcons, styles.ctaLeftCol.leftColIcon]}
          name="paper-plane-outline"
          size={25}
          color="black"
          onPress={() => Alert.alert('Share post was clicked!')}
        />
      </View>
      <View style={styles.ctaMidCol}>
        <MCIcons
          style={styles.ctaIcons}
          name="dots-horizontal"
          size={25}
          color="black"
        />
      </View>
      <View style={styles.ctaRightCol}>
        <Ionicons
          onPress={() => setIsBookmarked(!isBookmarked)}
          name="ios-bookmark-outline"
          size={25}
          color={isBookmarked ? 'orange': 'grey'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctaContainr: {
    width: "100%",
    flexDirection: "row",
    marginTop: 6,
  },
  ctaLeftCol: {
    flexDirection: "row",
    flex: 1,
    leftColIcon: {
      marginRight: 6,
    },
  },
  ctaMidCol: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  ctaRightCol: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  ctaIcons: {
    color: "grey",
  },
});
