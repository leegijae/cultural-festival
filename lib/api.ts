import { Festival } from "./types";

const MOCK: Festival[] = [
  { id:"1", title:"한강 불꽃 축제", region:"서울", startDate:"2025-10-01", endDate:"2025-10-03", isFree:true, imageUrl:"https://picsum.photos/200/200?1" },
  { id:"2", title:"부산 불빛 축제", region:"부산", startDate:"2025-11-05", endDate:"2025-11-07", imageUrl:"https://picsum.photos/200/200?2" },
];

export async function fetchFestivals(params: {
  region: string | null; freeOnly: boolean; q: string;
}): Promise<Festival[]> {
  let res = MOCK;
  if (params.region) res = res.filter((x) => x.region === params.region);
  if (params.freeOnly) res = res.filter((x) => x.isFree);
  if (params.q) {
    const k = params.q.toLowerCase();
    res = res.filter((x) => x.title.toLowerCase().includes(k));
  }
  return new Promise((r) => setTimeout(() => r(res), 300));
}
