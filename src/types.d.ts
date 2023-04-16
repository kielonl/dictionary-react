import { StorageKey } from "./constants";

export interface StorageManager {
  save: (key: StorageKey, value: any) => void;
  load: (key: StorageKey) => any;
  remove: (key: StorageKey) => void;
}

export interface Word {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: any[];
}

export interface Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}
