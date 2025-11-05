import type { Festival } from "../constants/types";

export async function fetchFestivals(params?: { q?: string; tags?: string[] }): Promise<Festival[]> {
  // TODO: 공공데이터/자체 API 연동
  return [];
}

export async function fetchFestivalById(id: string): Promise<Festival | null> {
  return null;
}