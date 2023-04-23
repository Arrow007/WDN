<script>
    import SearchInput from "./SearchInput.svelte";
    import SearchResults from "./SearchResults.svelte";
    import lunr from 'lunr'
    import {searchResults, setSearchResults} from './store.js'

    const hashmap = {}
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('q');
    console.log("search params: ", searchTerm)

	if(searchTerm){
        fetch('searchIndex.json')
        .then((res) => res.json())
        .then((data) => {
            const index = lunr.Index.load(data);
            console.log(index.search(searchTerm))
            index.search(searchTerm).forEach((result) => {
                hashmap[result.ref] = result.score
            })
        })
    }

    fetch('simplifiedData.json')
        .then((res) => res.json())
        .then((data) => {
            let filtered = data
            if(Object.keys(hashmap).length !== 0){
                filtered = data.filter((entry) => {
                return hashmap[entry.title]
            })
            }
            setSearchResults(filtered)
        })
    $: console.log("search", $searchResults)
</script>

<SearchInput />

<SearchResults results={$searchResults} title='sdf' tag='sdf' heading='sdfg' />