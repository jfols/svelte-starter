import App from './App.svelte';

// small hack for dev mode to fix 404, in prod web server will handle 404
if (!window.location.hash || window.location.hash == '#') {
  window.location = '/#' + window.location.pathname;
}

const app = new App({
  target: document.body,
  props: {}
});

export default app;