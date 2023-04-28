<script>
	import { setSearchParams } from './store.js';

	let searchInput = '';
	function makeSearch(e) {
		e.preventDefault();
		const searchTerm = searchInput.trim();

		if (searchTerm !== '') {
			const queryParams = new URLSearchParams(window.location.search);
			queryParams.set('q', searchTerm);

			const newUrl = window.location.origin + window.location.pathname + '?' + queryParams.toString();
			setSearchParams(searchTerm);
			history.pushState(null, null, newUrl);
		}
	}

	function clearSearch() {
		searchInput = '';
	}
</script>

<div class="search-input">
	<form on:submit={makeSearch}>
		<button class="icon">
			<img src="search-icon.svg" alt="search" />
		</button>

		<input placeholder="Search your issue..." bind:value={searchInput} />

		<button type="button" class="icon" on:click={clearSearch}>
			<img src="clear.svg" alt="clear search" />
		</button>

		<button type="submit" class="submit">Search</button>
	</form>

	<div class="line">Use keywords for best result</div>
</div>

<style>
	.search-input {
		width: 100%;
		max-width: 50rem;
	}

	form {
		height: 70px;
		margin-top: 1rem;
		background-color: var(--primary-bg-color);
		box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
		display: flex;
		padding: 0 20px;
		align-items: center;
	}

	form img {
		width: 100%;
		height: 100%;
	}

	form button.icon {
		width: 20px;
		height: 20px;
		border: none;
		padding: 0;
		background-color: transparent;
		cursor: pointer;
		margin-right: 10px;
	}

	form input {
		width: 100%;
		background-color: inherit;
		border: none;
		font-weight: 400;
		font-size: 20px;
		outline: none;
		font-family: inherit;
	}

	form button.submit {
		background-color: var(--primary-color);
		border-radius: 4px;
		border: none;
		padding: 10px 20px;
		color: var(--primary-bg-color);
		font-family: inherit;
		font-weight: 500;
		font-size: 20px;
		cursor: pointer;
		margin-left: 10px;
	}

	/* .pills {
        margin-top: 20px;
    }

    .pills button {
        border-radius: 21px;
        border: none;
        font-size: 16px;
        padding: 5px 10px;
        margin-right: 5px;
        cursor: pointer;
        font-family: inherit;

        background-color: var(--primary-bg-color);
        color: var(--primary-color);
    }

    .pills button.selected {
        background-color: var(--primary-color);
        color: var(--primary-bg-color);
    } */

	.line {
		margin-top: 5px;
		margin-left: 1rem;
		font-weight: 300;
		font-size: 14px;
		color: rgba(57, 82, 145, 0.7);
		text-align: left;
	}
</style>
