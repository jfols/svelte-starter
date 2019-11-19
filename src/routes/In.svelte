<script>
  import Button from "../components/Button.svelte";
  import Logo from "../components/Logo.svelte";

  let currentTrack = 0;
  let tracks = [
    {
      src:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/709077898&color=%23805ad5&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
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
      src: "https://www.youtube.com/embed/N-QxeSz3A0E",
      tagline: "Fun with spam callers."
    }
  ];

  const decrementTrack = () => {
    currentTrack = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    try {
      gtag("event", "back");
    } catch (error) {
      console.log("gtag not defined.");
    }
  };

  const incrementTrack = () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    try {
      gtag("event", "next");
    } catch (error) {
      console.warn("gtag not defined.");
    }
  };
</script>

<Logo />
<div class="flex justify-center mt-4 mb-4">
  <div class="px-4">
    <Button handleClick={decrementTrack}>Back</Button>
  </div>
  <div class="px-4">
    <Button handleClick={incrementTrack}>Next</Button>
  </div>
</div>
<div
  class="text-center mt-4 z-50 text-gray-100 text-sm sm:text-base px-3 mt-4 mb-4">
  {tracks[currentTrack].tagline} ({currentTrack + 1}/{tracks.length})
</div>
<iframe
  class="w-full"
  style="height: 22rem;"
  title="exclusive"
  scrolling="no"
  frameborder="no"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  src={tracks[currentTrack].src} />
