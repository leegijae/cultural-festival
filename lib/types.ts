export type Festival = {
  id: string;
  title: string;
  region: string;       // ex) 서울, 부산...
  startDate: string;    // YYYY-MM-DD
  endDate: string;
  isFree?: boolean;
  imageUrl?: string;
  venue?: string;
  lat?: number;
  lng?: number;
  tags?: string[];
};
