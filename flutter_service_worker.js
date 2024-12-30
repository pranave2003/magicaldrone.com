'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fe211461b7191e26612bfb7637587459",
"version.json": "acc67dce9f29c404ad645a84ebc9db9a",
"index.html": "338503c9d1dfac928d8852f22270e38d",
"/": "338503c9d1dfac928d8852f22270e38d",
"main.dart.js": "9e0018f16664624be1b4f0b7585d63f1",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "56e034a2412c818669b2c92a2cfba566",
"icons/android-chrome-192x192.png": "56e034a2412c818669b2c92a2cfba566",
"icons/apple-touch-icon.png": "5b86ab331d27b9e7abb20e462054d510",
"icons/android-chrome-512x512.png": "a89b4daec86eb7c0be9fd18aa3552553",
"manifest.json": "3ca70c7903325ff2af3a2bc83b7f5f00",
"assets/AssetManifest.json": "8d6b15be402b6dc7112a78c6a77c3482",
"assets/NOTICES": "c2bc5f38e6c7f1def099031df0b04a78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e7857c08c635d311804b75950c53720f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2c5da6949b18b7dc1325455cad9702fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "43fb06ee1d50913e381ee45b171f783e",
"assets/fonts/MaterialIcons-Regular.otf": "d9f08763b2dd22384fd372eee80bd804",
"assets/Assets/img_1.png": "014af81baf1072825ba978e355dda508",
"assets/Assets/vn.png": "7c53904cb532123e588911a8447d856a",
"assets/Assets/Animation%2520-%25201729701670041.json": "b204ecffc414287e382edb93f592a8e1",
"assets/Assets/spider.jpg": "55cb60f2fbedc8037f269153ec7591b6",
"assets/Assets/theeppetti.jpg": "68181fbc698b14702425e1a5c53ba9c0",
"assets/Assets/vand.jpg": "55cee55e2e932259c5a6b6b62269d94d",
"assets/Assets/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/Assets/LR.png": "675cfbc1289d4815ab25be3392857d3a",
"assets/Assets/waterdrop.jpg": "eca9c5d8b16dad730e7aa98a72ea78c6",
"assets/Assets/mash2.jpg": "e7abd9498476b2f4c27eb40edc447976",
"assets/Assets/mashroom.jpg": "715d444b237b2658623c2f1a1846df3c",
"assets/Assets/threetheeppetti.jpg": "b4d531bdc0e83b067b70b302889ca73c",
"assets/Assets/sku.jpg": "218d7e03ae9fc9a225fb97f36514cdac",
"assets/Assets/IMG_0930.JPG": "239ba9424c952dc8e085de3c15a12626",
"assets/Assets/beerorang.jpg": "cb7915c66f70bdb022194852ed0647eb",
"assets/Assets/butterfly.jpg": "58cb8192c63a4291c523bab6086c2c88",
"assets/Assets/Contactbg.png": "9f77028cf8d5134bf9703b4c5d64c84a",
"assets/Assets/Ant.jpg": "b49ab603fa01ec55fce844aacb281a19",
"assets/Assets/cherry.jpg": "3bc58686c7a78f403937758eaef071a1",
"assets/Assets/snapseed.png": "ec369c39bac1f167642cb0bbc2113e7e",
"assets/Assets/cat.jpg": "13ddb9d83f482e1f6ba3082aa77a9f4c",
"assets/Assets/yellowflower2.jpg": "e7f7dbe75d3a9df901ca3be783b94875",
"assets/Assets/iphone.png": "ad1d644b2165188cc3721bb81ea16793",
"assets/Assets/kingfiher.jpg": "030ce7eeab8a682d702122584c6a1b3f",
"assets/Assets/click.jpg": "59bfa576dd8e5bbe201357a6cc7dbaef",
"assets/Assets/LOGO.jpg": "e9a4fa6f1e168bcb9fdd8715f1a4bb34",
"assets/Assets/thimbi.JPG": "f607f08610f02e242f1c0dd2f95fa296",
"assets/Assets/whiteflower.jpg": "4eb86f04022a97012b1b638a28f9e586",
"assets/Assets/picsart.png": "91e1082ef94df7a6d7f3b14afc678b01",
"assets/Assets/eecha.jpg": "4ce5d3f2bc01edbc6e0e918e985ae100",
"assets/Assets/flower.jpg": "2902dcfec09c5933b6d8d089068acd11",
"assets/Assets/dharika.jpg": "8878fba4bf4fe45902e4235050ba7896",
"assets/Assets/ecah2.jpg": "31b4b2b5ce9bb61869f123cc66c670dd",
"assets/Assets/ant2.jpg": "46a4ec6cf4c0aa2b5d795719891cacc3",
"assets/Assets/lense.png": "59d79707da5e6debe6a4ecd544163d82",
"assets/Assets/Camera.png": "c9a57876fdb5896940bd31a61913c56d",
"assets/Assets/yellowflower.jpg": "e9e9aaa622fcc77ea866946bd1e47edd",
"assets/Assets/homebg.png": "e64fb2ee4e425cdce30f40d4d9c1e60d",
"assets/Assets/photoroom.png": "83e508bec7b2a845243a7628a3f0ad81",
"assets/Assets/redbeer.jpg": "71b0aa391d8338060a4c496540a33ec1",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
