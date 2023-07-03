chrome.webRequest.onBeforeRequest.addListener(
  (event) => {
    return { cancel: true };
  },
  {
    urls: [
      "https://confirm.95urbehxy2dh.top/*",
      "https://confirm.95urbehxy2dh.top/*",
      "https://chingari.io/*",
      "https://chingari.io/*",
      "http://usuallyaltered.com/*",
      "http://timesresidential.com/*",
      "https://nestledoubtlog.com/*",
      "http://nestledoubtlog.com/*",
    ],
  },
  ["blocking"]
);
