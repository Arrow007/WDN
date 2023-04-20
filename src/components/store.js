import { writable } from 'svelte/store';

export const searchResults = writable([])

export function setSearchResults(newResults){
  searchResults.set(newResults);
}