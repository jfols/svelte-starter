<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  import Button from "../components/Button.svelte";
  import Logo from "../components/Logo.svelte";
  import In from "./In.svelte";

  let isAbleToEnter = false;
  let hasEntered = false;
  let secondsWaited = 17;
  let secondsUntilIn = secondsWaited;
  let messageDelay = 55;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      secondsUntilIn--;
      if (secondsUntilIn === 0) {
        isAbleToEnter = true;
        interval.clearInterval();
      }
    }, 1000);
  });
</script>

<Logo />

{#if isAbleToEnter && !hasEntered}
  <div class="text-center mt-12" transition:fly={{ y: -200, duration: 1000 }}>
    <Button
      handleClick={() => {
        hasEntered = true;
      }}>
      enter
    </Button>
    <div class="text-base text-gray-300 mt-12">
      Congratulations! You waited {secondsWaited} seconds, now you're in!
    </div>
    <div class="text-base text-green-400 mt-12">~ best with volume up ~</div>
  </div>
{/if}

{#if secondsUntilIn > 0}
  <div class="text-center mt-8">
    <span class="vt text-teal-400" style="font-size: 10rem;">
      {secondsUntilIn}
    </span>
  </div>
  {#if secondsUntilIn < messageDelay}
    <div
      in:fly={{ y: 200, duration: 5000 }}
      out:fade={{ duration: 1 }}
      class="text-center text-gray-500 mt-4">
      Please be patient, it's almost your turn.
    </div>
  {/if}
{/if}

{#if isAbleToEnter && hasEntered}
  <div transition:fade={{ duration: 3000, delay: 1001 }}>
    <In />
  </div>
{/if}
