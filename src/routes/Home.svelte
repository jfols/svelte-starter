<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  import Button from "../components/Button.svelte";
  import Logo from "../components/Logo.svelte";

  let clicks = 0;
</script>

<Logo />

<div class="text-center mt-12" transition:fly={{ y: -200, duration: 1000 }}>
  <Button
    handleClick={() => {
      clicks++;
    }}>
    click me baby ({clicks})
  </Button>
  <div class="text-base text-gray-300 mt-12">
    Just a little svelte action, nothing to here...
  </div>
  <div class="text-base text-green-400 mt-12">
    edit src/routes/Home.svelte to see changes here
  </div>
</div>
