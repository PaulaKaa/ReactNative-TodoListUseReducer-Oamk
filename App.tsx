import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Button } from "react-native-paper";
import Task from "./components/Task";
import { useTask } from "./hooks/useTodos";
import { useState } from "react";

/*

UPDATE!

Extend todo app from previous weekly assignment by using useReducer to manage tasks. 
All states and related functions should be implemented as a custom hook. 
Create hooks folder and create useTodos custom hook.

*/

export default function App() {
  const { tasks, addTask, getLineThrough } = useTask();
  const [input, setInput] = useState("");

  const add = () => {
    addTask(input);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter task"
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <Button
          mode="text"
          style={styles.button}
          textColor="#FFFFFF"
          onPress={add}
        >
          Save
        </Button>
      </View>
      <SwipeListView
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            name={item.name}
            done={item.done}
            getLineThrough={getLineThrough}
          ></Task>
        )}
      ></SwipeListView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    marginTop: 32,
    backgroundColor: "#2196F3",
    paddingTop: 12,
    paddingBottom: 12,
    color: "#FFFFFF",
  },
  inputRow: {
    flexDirection: "row", //rivittää textinput ja button
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: "#ffffff",
    marginRight: 8,
    borderRadius: 6,
  },
  button: {
    marginRight: 8,
    backgroundColor: "green",
    color: "white",
  },
});
