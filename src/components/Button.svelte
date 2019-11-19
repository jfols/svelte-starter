<script>
  export let url = undefined;
  export let handleClick = () => {};
</script>

{#if url}
  <a href={url} on:click={event => handleClick(event)}>
    <button
      class="px-10 py-4 rounded-sm border-b-2 text-gray-900 uppercase text-xl
      font-bold"
      style="background: linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);
      border-color:#108900">
      <slot />
    </button>
  </a>
{:else}
  <button
    on:click={event => handleClick(event)}
    class="px-10 py-4 rounded-sm border-b-2 text-gray-900 uppercase text-xl
    font-bold"
    style="background: linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);
    border-color:#108900">
    <slot />
  </button>
{/if}
