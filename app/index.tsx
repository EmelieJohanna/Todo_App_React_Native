import React from "react";
import { View, FlatList, TouchableOpacity, Button, Text } from "react-native";
import { useRouter } from "expo-router";
import { useTodos } from "@/contexts/TodoContext";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export default function HomeScreen() {
  const { todos } = useTodos();
  const router = useRouter();

  const handleNavigateToDetail = (item: Todo) => {
    router.push({
      pathname: `[detail]`,
      params: { todo: JSON.stringify(item) },
    });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: Todo }) => (
          <TouchableOpacity onPress={() => handleNavigateToDetail(item)}>
            <View
              style={{
                padding: 16,
                backgroundColor: "#f9f9f9",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Todo" onPress={() => router.push("add")} />
    </View>
  );
}
