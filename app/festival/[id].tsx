import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image } from "react-native";
import { useEffect, useState } from "react";
import { Festival } from "../../lib/types";
import { fetchFestivals } from "../../lib/api";

export default function FestivalDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [item, setItem] = useState<Festival | null>(null);

  useEffect(() => {
    (async () => {
      const list = await fetchFestivals({ region: null, freeOnly: false, q: "" });
      setItem(list.find((x) => x.id === id) ?? null);
    })();
  }, [id]);

  if (!item) return null;

  return (
    <ScrollView className="flex-1">
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} className="w-full h-56" />
      )}
      <View className="p-4">
        <Text className="text-xl font-bold">{item.title}</Text>
        <Text className="text-sm text-gray-600 mt-1">
          {item.region} · {item.startDate} ~ {item.endDate}
        </Text>
        {item.venue && <Text className="mt-2">{item.venue}</Text>}
        {/* 추후: 지도, 티켓/홈페이지 링크, 리뷰/사진, 즐겨찾기 버튼 등 */}
      </View>
    </ScrollView>
  );
}
