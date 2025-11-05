import { View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ onSubmit }: { onSubmit: (q: string)=>void }) {
  const [q, setQ] = useState("");
  return (
    <View className="w-full flex-row items-center gap-2 px-4 py-3 rounded-2xl bg-surface2 border border-neutral-800">
      <Ionicons name="search" size={18} color="#9CA3AF" />
      <TextInput
        className="flex-1 text-base"
        placeholder="Search festivals, cities, tags…"
        value={q}
        onChangeText={setQ}
        onSubmitEditing={() => onSubmit(q)}
      />
      {!!q && (
        <Pressable onPress={() => setQ("")}>
          <Ionicons name="close" size={16} color="#9CA3AF" />
        </Pressable>
      )}
    </View>
  );
}
