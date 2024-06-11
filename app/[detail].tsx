import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTodos } from "@/contexts/TodoContext";

interface Todo {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

export default function DetailScreen() {
  const { todo: todoParam } = useLocalSearchParams();
  const router = useRouter();
  const { toggleTodoDone, deleteTodo } = useTodos();

  if (!todoParam) {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Error: No todo data provided</Text>
      </View>
    );
  }

  let todo: Todo;
  try {
    todo = JSON.parse(todoParam as string);
  } catch (error) {
    console.error("Failed to parse todo parameter", error);
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Error: Invalid todo data</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24 }}>{todo.title}</Text>
      <Text style={{ fontSize: 24 }}>{todo.description}</Text>
      <Button
        title={todo.done ? "Mark as Undone" : "Mark as Done"}
        onPress={() => {
          toggleTodoDone(todo.id);
          Alert.alert(
            "Todo updated",
            `Todo is now ${todo.done ? "undone" : "done"}`
          );
          router.back();
        }}
      />
      <Button
        title="Delete"
        onPress={() => {
          deleteTodo(todo.id);
          Alert.alert(
            "Todo deleted",
            `Todo with title ${todo.title} has been deleted`
          );
          router.back();
        }}
      />
    </View>
  );
}
