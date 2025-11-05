import { View, Image, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export type Festival = {
  id: string; title: string; city?: string; dateRange?: string;
  banner?: string; tags?: string[];
};

export default function FestivalCard({ f }: { f: Festival }) {
  return (
    <Link href={`/festival/${f.id}`} asChild>
      <Pressable className="rounded-2xl overflow-hidden bg-surface2" style={{ boxShadow: "var(--shadow-card)" }}>
        {!!f.banner && <Image source={{ uri: f.banner }} className="w-full h-40" />}
        <View className="p-4 gap-1">
          <Text className="text-lg font-semibold">{f.title}</Text>
          {!!f.city && <Text className="text-neutral-400">{f.city}</Text>}
          {!!f.dateRange && <Text className="text-neutral-400">{f.dateRange}</Text>}
        </View>
      </Pressable>
    </Link>
  );
}
