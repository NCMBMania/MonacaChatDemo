const $ = Dom7;

let webSocket;
// NCMBの初期化用
const event = window.cordova ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(event, async (e) => {
  const config = await (await fetch('./js/config.json')).json();
  window.ncmb = new NCMB(config.applicationKey, config.clientKey);
  const webSocket = new WebSocket(config.websocketUrl);
  webSocket.onopen = onOpen;
  webSocket.onclose = onClose;
  webSocket.onerror = onError;
  window.webSocket = webSocket;
  window.app = new Framework7({
    name: 'My App', // App name
    theme: 'auto', // Automatic theme detection
    el: '#app', // App root element
    // App store
    store: store,
    // App routes
    routes: routes,
  });
});

const onOpen = (e) => {
}

const onError  = (e) => {
  console.log(e);
};

const onClose = (e) => {
}
