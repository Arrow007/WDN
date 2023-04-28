import { writable, derived } from 'svelte/store';
import lunr from 'lunr';

export const searchParams = writable(new URLSearchParams(window.location.search).get('q'));

export function setSearchParams(terms) {
	searchParams.set(terms);
}

export const searchResults = derived(
	searchParams,
	async ($searchParams, set) => {
		let hashmap = {};
		if ($searchParams) {
			const data = await fetch('searchIndex.json').then((res) => res.json());
			const index = lunr.Index.load(data);
			index.search($searchParams).forEach((result) => {
				hashmap[result.ref] = result.score;
			});
		}
		const json = await fetch('simplifiedData.json').then((res) => res.json());
		if (Object.keys(hashmap).length !== 0) {
			const filtered = json.filter((entry) => {
				return hashmap[entry.title] !== undefined;
			});
			set(filtered);
		} else {
			set(json);
		}
	},
	[]
);
