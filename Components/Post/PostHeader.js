import { StyleSheet, View, Text, Image} from "react-native";
import MCIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function PostHeader({userDetails: {userName, userImageURI}}) {
  return (
    <View style={styles.header}>
      <View style={styles.userDetails}>
        <Image
          style={styles.userImage}
          source={{
            uri: `${userImageURI}`,
          }}
        />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View>
        <MCIcons
          style={styles.headerIcon}
          name="dots-vertical"
          size={25}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginRight: 6,
  },
  userName: {},
  iconContainer: {
    alignSelf: "flex-end",
  },
  headerIcon: {
    alignSelf: "flex-end",
    position: "relative",
    left: 10,
    color: "grey",
  },
});
