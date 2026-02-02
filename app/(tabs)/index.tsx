import useTheme from "@/hook/useThemes";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Create New Todo App</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
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
