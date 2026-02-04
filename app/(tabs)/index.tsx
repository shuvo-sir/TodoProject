import { api } from "@/convex/_generated/api";
import useTheme from "@/hook/useThemes";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log("Todos:", todos);

  const addTodo = useMutation(api.todos.addTodo);
  const clearTodos = useMutation(api.todos.clearTodos);

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Create New Todo App</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => addTodo({ text: "New Todo Item Added" })}
      >
        <Text>Add New Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearTodos()}>
        <Text>Clear All Todos</Text>
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
