<script>
  import Button from "../components/Button.svelte";
  import Logo from "../components/Logo.svelte";
  import { push, pop } from "svelte-spa-router";

  let currentTrack = 0;
  let tracks = [
    {
      src: "https://www.youtube.com/embed/pp3FAKUn63Y?autoplay=1",
      tagline: "Sean is very talented at making the videos."
    },
    {
      src:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/656326487&color=%23805ad5&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      tagline:
        "This song had 69 plays when we first posted it. Let's see what we can do about that. Hmmm, 1000+ plays per day, you're all doing good work."
    },
    {
      src:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/693612751&color=%23805ad5&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      tagline: "This Beck is very nice."
    },
    {
      src:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/870178313&color=%23805ad5&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      tagline: "Late model for life."
    },
    {
      src:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324166427&color=%23805ad5&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      tagline: "Bad and goldddddddddd."
    },
    {
      src: "https://www.youtube.com/embed/N-QxeSz3A0E?autoplay=1",
      tagline: "Fun with spam callers."
    },
    {
      tagline:
        "Visit again soon for more exclusive content and cool new features.",
      href: "https://www.reddit.com/r/mostexclusiveposts/"
    }
  ];

  const decrementTrack = () => {
    currentTrack = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    pop();
    try {
      gtag("event", "back");
    } catch (error) {
      console.log("gtag not defined.");
    }
  };

  const incrementTrack = () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    push("/" + (currentTrack + 1));
    try {
      gtag("event", "next");
    } catch (error) {
      console.warn("gtag not defined.");
    }
  };
</script>

<div
  class="text-center mt-4 z-50 text-gray-100 text-sm sm:text-base px-3 mt-12
  mb-4">
  {tracks[currentTrack].tagline}
</div>

{#if tracks[currentTrack].src}
  <iframe
    class="w-full"
    style="height: 20rem;"
    title="exclusive"
    scrolling="no"
    frameborder="no"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen
    src={tracks[currentTrack].src} />
{/if}

{#if tracks[currentTrack].href}
  <div class="text-center my-8">
    <a class="text-green-400 text-xl" href={tracks[currentTrack].href}>
      {tracks[currentTrack].href}
    </a>
  </div>
{/if}
<div class="flex justify-end my-8">
  {#if currentTrack != 0}
    <div class="px-4">
      <Button handleClick={decrementTrack}>Back</Button>
    </div>
  {/if}
  <div class="self-center text-gray-100 text-sm sm:text-base px-3">
    ({currentTrack + 1}/{tracks.length})
  </div>
  <div class="px-4">
    <Button handleClick={incrementTrack}>Next</Button>
  </div>
</div>
