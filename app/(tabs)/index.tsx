import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Create New Todo App</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "olive",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
