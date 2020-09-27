<script>
  export let handleClick = () => {
    clicks++;
  };

  let clicks = 0;
</script>

<button
  on:click={(event) => handleClick(event)}
  data-testid="button-test"
  class="px-10 py-4 rounded-sm border-b-2 border-gray-900 text-white bg-gray-800
    uppercase text-xl font-bold">
  <slot />
  {clicks}
</button>
