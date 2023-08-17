'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ea2fd1f41f727b4bb8e66cc885a1247e",
"assets/AssetManifest.json": "142976d0b1e1f2520c99f0864256e05a",
"assets/assets/fonts/NotoSerifBengali.ttf": "68560f73b4e9a3bd5455908f1dfc8f80",
"assets/assets/images/area-graph.png": "eca3dfd3accab317ea48dfd2f98327bd",
"assets/assets/images/bag.png": "ebc8397568b74fb6504d7aa257ae54eb",
"assets/assets/images/book.png": "66575aab1a2ee0e7237e3ce8ed28379a",
"assets/assets/images/breeding%25201.png": "d83ad44d941bc1f3d9a0a8267d89772f",
"assets/assets/images/carp-fish.png": "c9aad409e3b611d32f195edbec4d58e3",
"assets/assets/images/chemistry.png": "cb2f193e0c45399e36a5557c79307b91",
"assets/assets/images/crab.png": "a8c7c0f76e150225bb1103fd893dba59",
"assets/assets/images/delivery-truck.png": "c5bab290430fd0807019e2d125a4599b",
"assets/assets/images/erosion.png": "525ab9625540f0699bcb86bcca356fc2",
"assets/assets/images/excavation.png": "8403e92532eeedf9e554ed613df800a3",
"assets/assets/images/fertilizer1.png": "ad6fd520adde9ee5ed60fd913871d94b",
"assets/assets/images/fish%2520(1).png": "32243ac9f3b54caab9b9385e210f87f2",
"assets/assets/images/fish-bank.png": "25711c3f4d6fe4eba72b54cbdd8e65fa",
"assets/assets/images/fish-breeding.png": "6f0e2c8a201f11a60c78f26e12456183",
"assets/assets/images/fish-food.png": "6460216d578c30bec354ba3ed6fdf0a5",
"assets/assets/images/fish.png": "113cee746608842117635f3da01c18a6",
"assets/assets/images/fishing-net.png": "6dace2269e289d60c438ab631d3f7845",
"assets/assets/images/infectious-disease.png": "635e67f96086e59e4b046db48c740a8b",
"assets/assets/images/infectious.png": "a59795b906cb860cab3922fd87438dcb",
"assets/assets/images/lime.png": "23314b10b7d60200e1121feabf2718bb",
"assets/assets/images/logo.png": "f7facfbc743e7ed3e15a9675eb436bca",
"assets/assets/images/measuring-tape.png": "473a6ba4c7a3026a57197b2b12299166",
"assets/assets/images/medical-equipment.png": "453503e349a274db6a71a03d5c10b813",
"assets/assets/images/mite.png": "949e22abc05722b81f4d8f5a44a29b10",
"assets/assets/images/notepad.png": "e1187e3533e3c9648ca09f9d2c16c070",
"assets/assets/images/nutrition.png": "8edde0972fbc03b8b92a99b2bd703454",
"assets/assets/images/PG.png": "f10641381093ce0a9531f76d9fcb7aa3",
"assets/assets/images/ph-meter.png": "1b83e353893849aad2783705c1bf9409",
"assets/assets/images/plankton.png": "16692ac01a0cba1a485e8881daf15273",
"assets/assets/images/pond.png": "481814318ce0a5a9ea5affab889071f0",
"assets/assets/images/pond_foot.png": "3446451333f52b7af171d961fdf398d4",
"assets/assets/images/pump.png": "9a349042c0b7f75215aeed81aaf946da",
"assets/assets/images/reservoir.png": "178f67db91c4376fae98dcdb69811835",
"assets/assets/images/river.png": "ef1f3a5077bf4c414f5581b3e9983f22",
"assets/assets/images/sardines.png": "d3948510502d407ece0596ae9f1a1d10",
"assets/assets/images/sea-level.png": "ac47ffa7579804eec2e9b0420cf36d85",
"assets/assets/images/seafood%25202.png": "fb1eb529ab6b944aa99c98cf82a2752e",
"assets/assets/images/seaweed.png": "7cecdeaee51f365f84fa4268da5478e3",
"assets/assets/images/shrimp.png": "edca23b00cd339371147f45fc14403bd",
"assets/assets/images/Splash2.png": "65c78b07d31955f723c0aec13904f012",
"assets/assets/images/Splesh_Screen_FC.png": "a4b1eb366d99becaac02fc88f75b3818",
"assets/assets/images/support.png": "87d1185d014c4364f114b7fc6e53772f",
"assets/assets/images/syringe.png": "4d865409cf09969c4d765105a50dd493",
"assets/assets/images/tools.png": "cd241bd3132d12fbecd98e284208643f",
"assets/FontManifest.json": "77cee047760478495a2ac5762d5339c1",
"assets/fonts/MaterialIcons-Regular.otf": "c664a29b9483401b9364ba317556689f",
"assets/NOTICES": "092233357787d349f6b7f40febf59b89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "0bf349f042157d06f200892ae28e0f32",
"firebase-messaging-sw.js": "559e5e2694cc24879ff42e22bcd9f6be",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "d1c953fc71185cd2eaa8fe11f24e7745",
"icons/Icon-512.png": "fcae79ef0dc32d7bfcaa288df5376053",
"icons/Icon-maskable-192.png": "d1c953fc71185cd2eaa8fe11f24e7745",
"icons/Icon-maskable-512.png": "fcae79ef0dc32d7bfcaa288df5376053",
"index.html": "dab675a462e2ec7d5b737754fe6fc711",
"/": "dab675a462e2ec7d5b737754fe6fc711",
"main.dart.js": "39434b2e7ceb3499899e1cb1e69a1086",
"manifest.json": "2e4d26e32a9275a80ce9ac6fb39cd6b2",
"splash/img/light-background.png": "65763b736105a4d36e642d7e49f62494",
"version.json": "e8b0cdf3526d7896e36ce0e77db56142"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
