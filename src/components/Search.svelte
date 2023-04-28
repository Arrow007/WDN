<script>
	import SearchInput from './SearchInput.svelte';
	import SearchResults from './SearchResults.svelte';
	import { searchResults } from './store.js';
</script>

<SearchInput />

<SearchResults results={$searchResults} title="sdf" tag="sdf" heading="sdfg" />
