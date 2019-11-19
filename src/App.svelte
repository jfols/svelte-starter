<script>
  import "./main.css";
  import Router, { location } from "svelte-spa-router";

  import Footer from "./components/Footer.svelte";
  import Home from "./routes/Home.svelte";
  import In from "./routes/In.svelte";
  import NotFound from "./routes/NotFound.svelte";

  import Nav from "./components/Nav.svelte";

  import { exampleStore } from "./stores";

  let exampleStoreValue;
  exampleStore.subscribe(value => {
    exampleStoreValue = value;
  });

  exampleStore.set(42);

  location.subscribe(value => {
    console.log("pageview: ", value, window.location);
    try {
      gtag("config", "UA-59068287-2", {
        page_location: window.location,
        page_path: value
      });
    } catch (error) {
      console.warn("gtag not loaded...");
    }
  });

  const routes = {
    "/": Home,
    "/in": In,
    "/in/*": In,
    // named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // wildcard parameter
    // '/book/*': Book,

    // catch-all (must be last)
    "*": NotFound
  };
</script>

<div class="bg-gray min-h-screen subpixel-antialiased">
  <!-- <Nav /> -->
  <div class="flex justify-center">
    <div class="w-11/12 sm:w-4/5 md:w-3/5">
      <Router {routes} />
    </div>
  </div>
  <div class="flex justify-center">
    <div class="w-11/12 sm:w-4/5 md:w-3/5">
      <Footer />
    </div>
  </div>
</div>
