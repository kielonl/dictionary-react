import { StorageKey } from "./constants";

export interface StorageManager {
  save: (key: StorageKey, value: any) => void;
  load: (key: StorageKey) => any;
  remove: (key: StorageKey) => void;
}
