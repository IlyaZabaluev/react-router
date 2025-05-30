import { API_BASE } from "../constants/apiBase";
import type { Episode } from "../types/episode";
import type { Hero } from "../types/hero";
import type { Location } from "../types/location";


interface PaginatedResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}


export const api = {
  heroes: {
    getAll: (page: number = 1): Promise<PaginatedResponse<Hero>> => 
      fetch(`${API_BASE}/character?page=${page}`).then(res => res.json()),
    getById: (id: number): Promise<Hero> => 
      fetch(`${API_BASE}/character/${id}`).then(res => res.json())
  },
  locations: {
    getAll: (page: number = 1): Promise<PaginatedResponse<Location>> => 
      fetch(`${API_BASE}/location?page=${page}`).then(res => res.json()),
    getById: (id: number): Promise<Location> => 
      fetch(`${API_BASE}/location/${id}`).then(res => res.json())
  },
  episodes: {
    getAll: (page: number = 1): Promise<PaginatedResponse<Episode>> => 
      fetch(`${API_BASE}/episode?page=${page}`).then(res => res.json()),
    getById: (id: number): Promise<Episode> => 
      fetch(`${API_BASE}/episode/${id}`).then(res => res.json())
  }
};