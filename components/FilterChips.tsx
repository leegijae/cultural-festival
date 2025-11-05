import { View, TextInput, ScrollView, Pressable, Text } from "react-native";

const REGIONS = ["전체","서울","부산","대구","인천","광주","대전","울산","경기","강원","충청","전라","경상","제주"];

export default function FilterChips({
  region, onRegionChange, freeOnly, onFreeOnlyChange, q, onQueryChange,
}: {
  region: string | null;
  onRegionChange: (v: string | null) => void;
  freeOnly: boolean;
  onFreeOnlyChange: (v: boolean) => void;
  q: string;
  onQueryChange: (v: string) => void;
}) {
  return (
    <View>
      <TextInput
        placeholder="축제명/키워드 검색"
        value={q}
        onChangeText={onQueryChange}
        className="bg-white rounded-xl px-3 py-2 mb-2"
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {REGIONS.map((r) => {
          const sel = region === r || (r === "전체" && region === null);
          return (
            <Pressable
              key={r}
              onPress={() => onRegionChange(r === "전체" ? null : r)}
              className={`px-3 py-1 mr-2 rounded-full ${sel ? "bg-black" : "bg-gray-200"}`}
            >
              <Text className={`${sel ? "text-white" : "text-black"}`}>{r}</Text>
            </Pressable>
          );
        })}
        <Pressable
          onPress={() => onFreeOnlyChange(!freeOnly)}
          className={`px-3 py-1 mr-2 rounded-full ${freeOnly ? "bg-emerald-600" : "bg-gray-200"}`}
        >
          <Text className={`${freeOnly ? "text-white" : "text-black"}`}>무료</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
