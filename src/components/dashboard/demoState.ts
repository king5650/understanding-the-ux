import { useState, type Dispatch, type SetStateAction } from "react";

// In-memory demo data stays available when navigating without implying server persistence.
const sessionRows = new Map<string, unknown>();

export function useDemoRows<T>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => (sessionRows.get(key) as T | undefined) ?? initial);
  const update: Dispatch<SetStateAction<T>> = (next) => {
    setValue(current => {
      const result = typeof next === "function" ? (next as (previous: T) => T)(current) : next;
      sessionRows.set(key, result);
      return result;
    });
  };
  return [value, update];
}