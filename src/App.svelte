<script>
  import "./main.css";
  import { Route, router } from "tinro";

  import Footer from "./components/Footer.svelte";
  import Home from "./routes/Home.svelte";
  import NotFound from "./routes/NotFound.svelte";

  import Nav from "./components/Nav.svelte";

  import { exampleStore } from "./stores";

  let exampleStoreValue;
  exampleStore.subscribe((value) => {
    exampleStoreValue = value;
  });

  exampleStore.set(42);

  router.subscribe((value) => {
    console.log("pageview: ", value, window.location);
    try {
      gtag("config", "GA-YOUR-CODE-HERE", {
        page_location: window.location,
        page_path: value,
      });
    } catch (error) {
      console.warn("gtag not loaded...");
    }
  });
</script>

<div class="bg-gray-100 min-h-screen subpixel-antialiased">
  <!-- <Nav /> -->
  <div class="flex justify-center">
    <div class="w-11/12 sm:w-4/5 md:w-3/5">
      <Route path="/">
        <Home />
      </Route>
    </div>
  </div>
</div>
