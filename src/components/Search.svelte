<script>
    import SearchInput from "./SearchInput.svelte";
    import SearchResults from "./SearchResults.svelte";
    import lunr from 'lunr'
    import {searchResults, setSearchResults} from './store.js'

    const hashmap = {}

	fetch('searchIndex.json')
        .then((res) => res.json())
        .then((data) => {
            const index = lunr.Index.load(data);
            index.search('franc').forEach((result) => {
                hashmap[result.ref] = result.score
            })
            console.log(hashmap)
        })

    fetch('simplifiedData.json')
        .then((res) => res.json())
        .then((data) => {
            const filtered = data.filter((entry) => {
                return hashmap[entry.title]
            })
            setSearchResults(filtered)
        })
</script>

<SearchInput />

<SearchResults title='sdf' tag='sdf' heading='sdfg' />