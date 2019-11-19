<script>
  import Button from "../components/Button.svelte";
  import Logo from "../components/Logo.svelte";
</script>

<Logo />
<div class="h-12" />
<div
  class="sm:text-center mt-4 z-50 text-gray-100 text-lg sm:text-2xl md:text-3xl
  xl:text-4xl px-3 mt-16">
  Sorry, this content is very extra exclusive right now...please try again
  later.
</div>
<div class="text-center mt-16">
  <Button
    handleClick={() => document.location.replace('https://www.mostexclusivewebsite.com')}>
    Try Again
  </Button>
</div>
