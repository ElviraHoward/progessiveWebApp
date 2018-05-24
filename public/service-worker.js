importScripts('bower_components/sw-toolbox/sw-toolbox.js');
const PRECACHE = "cache-v1";
const RUNTIME = "runtime";
const PRECACHE_URLS = [
    ".",
    "index.html",
    "/App.js",
    "./App.css",
    "./PartyCard.js",
    "./PartyCard.css",
    "./Main.js",
    "./Main.css",
    "./CategoryCard.js",
    "./CategoryCard.css",
    "./index.js",
    "./index.css",
    "./images"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return caches.open(RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
});
/*
// Set this to true for production
const doCache = true;

// Name our cache
const CACHE_NAME = 'my-pwa-cache-v1';

// Delete old caches that are not our current one!
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                Promise.all(keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log('Deleting cache: ' + key);
                        return caches.delete(key);
                    }
                }))
            )
    );
});
// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    // Get the assets manifest so we can see what our js file is named
                    // This is because webpack hashes it
                    fetch("manifest.json")
                        .then(response => {
                            response.json()
                        })
                        .then(assets => {
                            // Open a cache and cache our files
                            // We want to cache the page and the main.js generated by webpack
                            // We could also cache any static assets like CSS or images
                            const urlsToCache = [
                                '/',
                                '/styles/styles.css',
                                '/script/webpack-bundle.js'
                            ];
                            cache.addAll(urlsToCache)
                            console.log('cached');
                        })
                })
        );
    }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        );
    }
});
*/
