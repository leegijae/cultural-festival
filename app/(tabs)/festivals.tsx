import { useEffect, useMemo, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import FestivalCard from "../../components/FestivalCard";
import { Festival } from "../../lib/types";
import { fetchFestivals } from "../../lib/api";
import FilterChips from "../../components/FilterChips";

export default function FestivalsScreen() {
  const [data, setData] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState<string | null>(null);
  const [freeOnly, setFreeOnly] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      const items = await fetchFestivals({ region, freeOnly, q });
      setData(items);
      setLoading(false);
    })();
  }, [region, freeOnly, q]);

  const filtered = useMemo(() => data, [data]);

  return (
    <View className="flex-1 p-3">
      <FilterChips
        region={region}
        onRegionChange={setRegion}
        freeOnly={freeOnly}
        onFreeOnlyChange={setFreeOnly}
        q={q}
        onQueryChange={setQ}
      />
      {loading ? (
        <ActivityIndicator className="mt-6" />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(it) => it.id}
          renderItem={({ item }) => <FestivalCard item={item} />}
          contentContainerStyle={{ paddingTop: 8, paddingBottom: 16 }}
        />
      )}
    </View>
  );
}
