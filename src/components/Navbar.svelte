<script>
    import { onMount } from "svelte";

    const ROUTES = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "FAQs",
            path: "/faqs",
        },
        {
            label: "Common Issues",
            path: "/common-issues",
        },
    ];

    let pathname = "";

    onMount(() => {
        pathname = window.location.pathname;
    });
</script>

<nav>
    <div class="logo">Amadeus</div>

    <ul class="nav-list">
        <!-- <li><a href="/" class="active">Home</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/common-issues">Common Issues</a></li> -->
        {#each ROUTES as route}
            <li>
                <a href={route.path} class:active={pathname === route.path}>
                    {route.label}
                </a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        color: var(--primary-color);
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-left: 90px;
    }

    .nav-list {
        list-style: none;
        padding: 0;
        margin-right: 60px;
    }

    .nav-list li {
        display: inline-block;
    }

    .nav-list li a {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-decoration: none;
        margin-right: 20px;
        color: inherit;
    }

    .nav-list li a.active {
        text-decoration: underline;
        text-underline-offset: 5px;
        font-weight: 700;
        color: var(--primary-color);
    }
</style>
