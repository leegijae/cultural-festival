import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import AppHeader from "@/components/AppHeader";

export default function FestivalDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  // TODO: id로 상세 데이터 fetch
  return (
    <View className="flex-1 bg-surface">
      <AppHeader />
      <ScrollView className="flex-1">
        <Image source={{ uri: "https://placehold.co/1200x600" }} className="w-full h-64" />
        <View className="p-4 gap-3">
          <Text className="text-2xl font-bold">Festival {id}</Text>
          <Text className="text-neutral-400">Seoul · Dec 1–3, 2025</Text>
          <Text className="leading-6">
            Detailed description… (from API)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
