import { View, Pressable, Text } from "react-native";
export type Chip = { id: string; label: string; active?: boolean };

export default function FilterChips({ chips, onToggle }:{
  chips: Chip[], onToggle: (id:string)=>void
}) {
  return (
    <View className="flex-row flex-wrap gap-2">
      {chips.map(c => (
        <Pressable
          key={c.id}
          onPress={() => onToggle(c.id)}
          className={`px-3 py-2 rounded-full border ${c.active ? "bg-primary border-primary" : "bg-transparent border-neutral-700"}`}
        >
          <Text className={c.active ? "text-black" : "text-white"}>{c.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
