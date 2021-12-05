const sw = await navigator.serviceWorker.register('/sw.js');

const requests = {};

navigator.serviceWorker.addEventListener('message', async e => {
  if (!e.data.get) return;
  window.parent.postMessage(e.data, '*', [e.data.port]);
});