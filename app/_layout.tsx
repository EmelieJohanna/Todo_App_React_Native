import { Stack } from "expo-router";
import React from "react";
import { TodoProvider } from "@/contexts/TodoContext";

export default function Layout() {
  return (
    <TodoProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="add"
          options={{ title: "Add Todo", presentation: "modal" }}
        />
        <Stack.Screen name="[detail]" options={{ title: "Detail" }} />
      </Stack>
    </TodoProvider>
  );
}
