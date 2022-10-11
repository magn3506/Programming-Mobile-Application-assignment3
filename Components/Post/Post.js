import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostDetails from "./PostDetails";

export default function Post({
  postData,
  likeCounterState,
  setIsCaptionModalOpen,
  navigation,
}) {
  const { userImageURI, userName, postImages } = postData;

  return (
    <View style={styles.wrapper}>
      <PostHeader userDetails={{ userName, userImageURI }} />
      <View stlye={styles.carusel}>
        <ImageBackground
          style={styles.caruselImage}
          resizeMode="cover"
          source={{
            uri: `${postImages[0]}`,
          }}
        />
      </View>
      {likeCounterState && setIsCaptionModalOpen && (
        <>
          <PostFooter
            likeCounterState={likeCounterState}
            setIsCaptionModalOpen={setIsCaptionModalOpen}
            postData={postData}
            navigation={navigation}
          />
          <PostDetails />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // WRAPPER
  wrapper: {
    width: "100%",
    padding: 12,
  },
  // CARUSEL IMAGES
  carusel: {
    flex: 1,
    width: "100%",
    height: 400,
    borderWidth: 5,
    borderColor: "green",
  },
  caruselImage: {
    width: "100%",
    height: 320,
    resizeMode: "contain",
    backgroundColor: "black",
  },
});

// NOTES

// Challange using icons
// Challange making things fill out space. fx image 100%
// Converting styling from web to react-native
