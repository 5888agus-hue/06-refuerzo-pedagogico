import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Refuerzo Pedagógico",
        headerStyle: { backgroundColor: "#0066cc" },
        headerTintColor: "#fff",
      }}
    />
  );
}