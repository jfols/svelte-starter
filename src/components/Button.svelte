<script>
  export let handleClick = () => {};
</script>

<button
  on:click={event => handleClick(event)}
  class="px-10 py-4 rounded-sm border-b-2 border-gray-900 text-white bg-gray-800
  uppercase text-xl font-bold">
  <slot />
</button>
