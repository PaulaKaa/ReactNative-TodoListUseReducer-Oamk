import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

interface TaskProps {
  id: string;
  name: string;
  done: boolean;
  getLineThrough: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, name, done, getLineThrough }) => {
  const theme = useTheme();
  return (
    <Pressable
      onPress={() => {
        getLineThrough(id);
      }}
      style={[
        styles.taskRow,
        { backgroundColor: done ? "#E3F2FD" : "#FFFFFF" },
      ]}
    >
      <Text
        style={[
          styles.margins,
          {
            textDecorationLine: done ? "line-through" : "none",
            color: done ? "gray" : "black",
          },
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskRow: {
    marginLeft: 12,
    marginRight: 12, 
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
  },
  margins: {},
});

export default Task;
