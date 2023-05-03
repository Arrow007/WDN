<script>
  import { onMount } from 'svelte';
	import { searchParams, searchResults, setSearchParams } from './store.js';

	onMount(() => {
		window.addEventListener('popstate', (event) => {
			const url = new URL(event.target.navigation.currentEntry.url)
			const params = new URLSearchParams(url.search).get('q');
			setSearchParams(params);
		})
	})
</script>

{#if $searchParams}
	<section class="results" aria-label="Search Results">
		<div class="result-count">
			{$searchResults.length} search {$searchResults.length !== 1 ? 'results' : 'result'}
		</div>
		<ol>
			{#each $searchResults as result}
				<li class="result">
					<a href={`/common-issues/${result.slug}`}>
						<div class="heading">
							<h3 class="title">
								{result.title}
							</h3>
						</div>
						<div class="description">
							{result.description}
						</div>
					</a>
				</li>
			{/each}
		</ol>
	</section>
{/if}

<style>
	li {
		transition: all 200ms ease-out;
	}

	li:hover {
		translate: 0 -5px;
	}

	h3 {
		margin: 0;
	}

	ol {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	a {
		width: inherit;
		height: inherit;
		display: block;
		padding: 1.5rem 2.5rem;
		text-decoration: none;
	}

	.results {
		margin-top: 50px;
		max-width: 65rem;
		width: 100%;
		margin-bottom: 15rem;
	}

	.result-count {
		margin-right: 30px;
		margin-bottom: 10px;
		font-weight: 200;
		font-size: 14px;
		margin-left: 1.5rem;
	}

	.result {
		background-color: var(--primary-bg-color);
		box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
		margin-bottom: 20px;
	}

	.heading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.title {
		color: var(--primary-color);
		font-weight: 500;
		font-size: 20px;
		font-weight: 600;
	}

	.description {
		color: var(--base-color);
		font-size: 16px;
	}
</style>
