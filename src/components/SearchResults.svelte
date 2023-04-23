<script>
    import BasicPageTemplate from "./BasicPageTemplate.astro";
    import { searchResults } from "./store"
    
    // export interface Props {
    //     title: string;
    //     heading: string;
    //     tag: string;
    // }
</script>


    <!-- An example of a search result -->
    <div class="results">
        <div class="result-count">1 search results</div>
        <div class="result">
            <div class="heading">
                <div class="title">Franc and Langs</div>
                <div class="tag"></div>
            </div>
            <div class="description">
                If you are trying to import Franc and Lang, you might have this
                issue. This is because Franc uses import while Lang uses
                require. The newest version of Franc imposes this restriction
                which means you won't have an issue if you install the same
                version of Franc that Colt is using.
            </div>
        </div>
    </div>
    

<style>
    .results {
        margin-top: 50px;
        max-width: 65rem;
    }

    .result-count {
        display: flex;
        justify-content: end;
        margin-right: 30px;
        margin-bottom: 10px;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
    }

    .result {
        background-color: var(--primary-bg-color);
        border-radius: 38px;
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
        line-height: 23px;
    }

    .tag {
        background-color: var(--primary-color);
        border-radius: 21px;
        font-size: 14px;
        padding: 10px 20px;
        line-height: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-bg-color);
    }

    .description {
        color: var(--base-color);
        font-size: 16px;
        line-height: 19px;
    }
</style>
