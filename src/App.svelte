<script>
  import Router from "svelte-spa-router";

  import Home from "./routes/Home.svelte";
  import NotFound from "./routes/NotFound.svelte";

  import Nav from "./components/Nav.svelte";

  import { exampleStore } from "./stores";

  let exampleStoreValue;
  exampleStore.subscribe(value => {
    exampleStoreValue = value;
  });

  exampleStore.set(42);

  const routes = {
    "/": Home,
    // named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // wildcard parameter
    // '/book/*': Book,

    // catch-all (must be last)
    "*": NotFound
  };
</script>

<style lang="postcss">
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
</style>

<svelte:head />

<Nav />
<div>
  <Router {routes} />
</div>
