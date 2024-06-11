import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { useTodos } from "@/contexts/TodoContext";
import uuid from "react-native-uuid";

export default function AddScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTodo } = useTodos();
  const router = useRouter();

  const handleAddTodo = () => {
    const newTodo = {
      id: uuid.v4() as string,
      title,
      description,
      done: false,
    };
    addTodo(newTodo);
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Add Todo</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Todo title"
        style={{
          marginBottom: 16,
          padding: 8,
          borderWidth: 1,
          borderColor: "#ccc",
        }}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        style={{
          marginBottom: 16,
          padding: 8,
          borderWidth: 1,
          borderColor: "#ccc",
        }}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
}
