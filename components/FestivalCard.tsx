import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { Festival } from "../lib/types";

export default function FestivalCard({ item }: { item: Festival }) {
  return (
    <Link href={`/festival/${item.id}`} asChild>
      <Pressable className="flex-row p-3 rounded-2xl bg-white shadow
                            mb-3 items-center">
        {item.imageUrl ? (
          <Image
            source={{ uri: item.imageUrl }}
            className="w-24 h-24 rounded-xl mr-3"
          />
        ) : (
          <View className="w-24 h-24 rounded-xl mr-3 bg-gray-200" />
        )}
        <View className="flex-1">
          <Text className="text-base font-semibold" numberOfLines={1}>
            {item.title}
          </Text>
          <Text className="text-xs text-gray-600 mt-1">
            {item.region} · {item.startDate} ~ {item.endDate}
          </Text>
          {item.isFree && (
            <Text className="text-[11px] mt-1 px-2 py-0.5 rounded-full bg-emerald-100">
              무료
            </Text>
          )}
        </View>
      </Pressable>
    </Link>
  );
}
