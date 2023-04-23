<script>
	import BasicPageTemplate from './BasicPageTemplate.astro';
	import { searchResults } from './store';

	// export interface Props {
	//     title: string;
	//     heading: string;
	//     tag: string;
	// }
	export let results;
</script>

<!-- An example of a search result -->
<div class="results">
	<div class="result-count">{results.length} search result{results.length !== 1 ? 's' : ''}</div>
	{#each results as result}
		<div class="result">
			<div class="heading">
				<div class="title">
					<!-- Franc and Langs -->
					{result.title}
				</div>
				<div class="tag" />
			</div>
			<div class="description">
				{result.description}
				<!-- If you are trying to import Franc and Lang, you might have this
                issue. This is because Franc uses import while Lang uses
                require. The newest version of Franc imposes this restriction
                which means you won't have an issue if you install the same
                version of Franc that Colt is using. -->
			</div>
		</div>
	{/each}
</div>

<style>
	.results {
		margin-top: 50px;
		max-width: 65rem;
        width: 100%;
        margin-bottom: 15rem;
	}

	.result-count {
		/* display: flex;
        justify-content: end; */
		margin-right: 30px;
		margin-bottom: 10px;
		font-weight: 200;
		font-size: 14px;
        margin-left: 1.5rem;
	}

	.result {
		background-color: var(--primary-bg-color);
		border-radius: 4px;
		padding: 1.5rem 2.5rem;
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
	}

	.tag {
		background-color: var(--primary-color);
		border-radius: 21px;
		font-size: 14px;
		padding: 10px 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--primary-bg-color);
	}

	.description {
		color: var(--base-color);
		font-size: 16px;
	}
</style>
