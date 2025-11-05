import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#1E88E5" }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Discover", tabBarIcon: ({color,size}) => <Ionicons name="compass" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="map"
        options={{ title: "Map", tabBarIcon: ({color,size}) => <Ionicons name="map" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="favorites"
        options={{ title: "Favorites", tabBarIcon: ({color,size}) => <Ionicons name="heart" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarIcon: ({color,size}) => <Ionicons name="person" color={color} size={size} /> }}
      />
    </Tabs>
  );
}
