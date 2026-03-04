self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("danone-golde-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "https://cdn.tailwindcss.com",
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
        "https://unpkg.com/react@18.2.0/umd/react.production.min.js",
        "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
        "https://unpkg.com/@babel/standalone/babel.min.js",
      ]);
    }),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
