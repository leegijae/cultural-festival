import { View, FlatList } from "react-native";
import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import FilterChips, { Chip } from "@/components/FilterChips";
import FestivalCard, { Festival } from "@/components/FestivalCard";

export default function DiscoverScreen() {
  const [query, setQuery] = useState("");
  const [chips, setChips] = useState<Chip[]>([
    { id: "art", label: "Art" },
    { id: "music", label: "Music" },
    { id: "food", label: "Food" },
    { id: "free", label: "Free" },
  ]);

  const [data] = useState<Festival[]>([]); // TODO: API 연동
  const active = useMemo(() => chips.filter(c => c.active).map(c => c.id), [chips]);

  const filtered = useMemo(() => {
    return data.filter(d =>
      (!query || d.title.toLowerCase().includes(query.toLowerCase())) &&
      (active.length === 0 || (d.tags || []).some(t => active.includes(t)))
    );
  }, [data, query, active]);

  const toggle = (id: string) =>
    setChips(cs => cs.map(c => c.id === id ? { ...c, active: !c.active } : c));

  return (
    <View className="flex-1 p-4 gap-4">
      <SearchBar onSubmit={setQuery} />
      <FilterChips chips={chips} onToggle={toggle} />
      <FlatList
        data={filtered}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <FestivalCard f={item} />}
      />
    </View>
  );
}
