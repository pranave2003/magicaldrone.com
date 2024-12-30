'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7478fd3adaa8960a87fb16def30f088a",
"version.json": "acc67dce9f29c404ad645a84ebc9db9a",
"index.html": "338503c9d1dfac928d8852f22270e38d",
"/": "338503c9d1dfac928d8852f22270e38d",
"main.dart.js": "f3ea4a1a0dbdacc68f323903c5929ddb",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "56e034a2412c818669b2c92a2cfba566",
"icons/android-chrome-192x192.png": "56e034a2412c818669b2c92a2cfba566",
"icons/apple-touch-icon.png": "5b86ab331d27b9e7abb20e462054d510",
"icons/android-chrome-512x512.png": "a89b4daec86eb7c0be9fd18aa3552553",
"manifest.json": "3ca70c7903325ff2af3a2bc83b7f5f00",
".git/config": "72a5af4bfa28a5f35c3224d0c34d37eb",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/59/e03bc4de4c37bc146ee16887098df5642fcc69": "fa5c4f00ba7a66a67e1a3b091a1cc2fd",
".git/objects/92/09c4ac41a4ee612135a1a115d8e06e5cec6307": "89753466aa52efe15c67b606cf9bd076",
".git/objects/68/c904fc1ff827eca6290bb811faff6a19158c89": "061caad0d742571fe66854c524ae2182",
".git/objects/9b/8937d67cc6a0b20b25482b48690ff2230d91b4": "938deb0f791b28dbb38b2f354f45a938",
".git/objects/9e/d5566c16b82ed66e51de72dbc9fe2d9aad816a": "87d28a6e4131cab341286e4dc0fe30cb",
".git/objects/9e/8677c7661d2bf74ffc16a55a1a0b5c6c26ba26": "8bc5ab89701eb3eee1982483c7804876",
".git/objects/6a/a8e52c30a1be7f10f6f8498f7f72aeb4db279a": "eeec68171dc870c27b0931fb3eca3085",
".git/objects/32/c5682e4aca82118b48218ffa0e76ca3a35e119": "186112364bf8ba7da7fcda8832b6f3a1",
".git/objects/69/1e9df00643c1b47958042142de8179b0f87a6a": "63a8af38340298c14164d570bde63f9e",
".git/objects/51/212ba494461d89f65888abd06e3a98a193006b": "64e72c3ed8e9c512997286edb7cb50b2",
".git/objects/60/156bb7ac9f28bda69e6cd676859d8d07454d8d": "4ae2ba71b724c3c02b853b1c42a125c7",
".git/objects/5f/e84e3ebf62c3a87d770e074a0e0b5286046640": "4148babc2d7fadde9268158177ce7cde",
".git/objects/a3/029791a1e027ade4d9d73c74807fc544f0a938": "4d35d005dc9ecc5619d76dcdb341774c",
".git/objects/b2/04b80dc725a32e9b08f92611fbe196c0ef23b7": "2d91a92129a0156dae9c8853ffb40442",
".git/objects/ad/e0dbc3eae238267fdb478374c8a92475c2727f": "eb697b4ccfafcc21d815b1ec8e528623",
".git/objects/d0/8b86659b4d1534f6e327e4c7021b7ddd7a861e": "a45cf41287b12d1f112c90c74391a5e0",
".git/objects/d1/57ab37a4d3d12fc612f711ab138939ec6c8f4a": "811bcd436e25e18a103aeab596c7ed17",
".git/objects/d6/39f71af0b90de9d255c1149e0f29b4d5d15f17": "7b27c6c4017014f12161ff3b54472df8",
".git/objects/d8/7a85983856d5dacb67a2f5b6af05ec3d8b9e31": "94f3a88b263225418d679503cc151ff9",
".git/objects/d8/97f333d357a413af6deb291f8a962dcb547bd0": "5dfaf8f55a7e10f4db26980e3e0e8139",
".git/objects/ab/4d5c87743a503f2c9a7a2d4b064e234950541d": "4c1b933cfe3d4df196648f4b058cd7da",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/81cb2c8ce8099b5148853ffe2994b978cf3d8d": "e2fd676a996385b4857b96d968acd0ae",
".git/objects/e4/efef6f5bb355be4c93572de96e8911acd948c0": "ee61b0d802de342717d48a942c4212aa",
".git/objects/e4/74cb02c1c9b3a0b235bf2509d57d29b8908a2e": "b16599e173a886d3ab9b24d067bd1fd9",
".git/objects/fe/880a4e3e89677e650f51cf737e2fb75f76e940": "321031d02eaed9f5691ed33c7cf08c7c",
".git/objects/fb/a8da95a95f71e2e106db9e274f1fabbc2e848f": "7bfc0bfe7454752c000de27ba8e30fcf",
".git/objects/fb/ba8efa24e2a8daa623f21c7639eeac00eaaeac": "cb758acb8ec759acbaea7b14a58ce43b",
".git/objects/ed/f8c5bad2acce8b3abbea01fdf4f506f7e4858f": "23d921ca0e38a806998202345a1e5e9b",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/e0876eed0f663d62e4c415bf8bec84635152c2": "bcf6a039f4b5a58bb980ec988db077b6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/2aeb0c70cb454664196814927d0d7fcdef2749": "7d7abfbf4e56cd23da70c8362c268ba8",
".git/objects/20/ef87dd593415aabf5791deebc368f042f5ccad": "f30938fc18d0b5d911c2490a2de38b7c",
".git/objects/20/ddd1dce95a1d09b5c1e7a8f8f482db80cf34ea": "1ec43fa94b4614e99ec93d43d8a38845",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/1f/a8eaee1aea6a51bc1656d21b366fc3c9ca83b8": "66d9377930f6d74c245759c9b8690625",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/1a/2fa7b9b9113847d99ae40f9eba97b63553e6eb": "572e525dd50a253876d85b4f2428ddd1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/c29cf0dcf89ce5498e19399eb0e17e64334a64": "b98292718953737e897be2c2439d64c3",
".git/objects/6e/896c5db66ac1973cf6c93aaf2188e77771f92e": "3f93d943c31224ab9c6beff6cf721378",
".git/objects/09/24ebf53842eb54b75cf3e18a67dee595c1ed99": "37c43af9f5cbe9b0688e1faa1f166be3",
".git/objects/5d/dcb2510ad80eabfa5cdd0a8ffe9b3f64d31e75": "8058134f85e4853ed66511327983b1b1",
".git/objects/3a/99f7ccce74373435abd6eb47245c25a7d51695": "65b240a9112cc9c25737b9b2071d62d0",
".git/objects/3f/a11dda566373d8a2dd86bc8e03249c2605adf8": "43e85281de841c8934ef91aa3606d328",
".git/objects/5e/816dee14cc443ffe2bc01944bfd3c7e367f84c": "29200351da26f61b61770564859eda49",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/7b13ae15071cc53c3db166c78f0540ef89238b": "075e480af80f5b5754cfa542ba0d47ff",
".git/objects/39/1cdae1a3abb429a8ada4dd34806cc22df8fd45": "8935b7e31c9396fd4d0aa04a1028108b",
".git/objects/52/1ce584cf57cba675942b6023f3a4e35cf44cf4": "2db84336f639c9f18cb913c17bbe4f2f",
".git/objects/97/c4cbed83eab261e8d9329e978e69cb9ff0eb95": "75bf0892f0391255558eb18a3e500cd3",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0a/0360ba6a06741a1e9f9f244e87fff6980039f0": "1cec408d708a2f26032d726d7c9cbeb6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ed22b312f9255d14aba96008c239d52d9e2719": "e6ff2ea749c1d7c3d78130abd53aa816",
".git/objects/d4/59629073219bb1b367501c55e69b77164325f0": "d1fff4dca55df1c42d4aa52918f5ab54",
".git/objects/a7/7a9cb1ef285fd09fdec62725a7bacedaeba9c5": "421b4182d3b8072f01d5ea8b900a45bb",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/e78f84f00f784164af8d5ad0109a567800132d": "94f8b6069b9ea1a3b2e9d66094897ad0",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/aa/6d0cfc77f6626bc2fe8479e239ca7aafd7a7c5": "bd18d9c51af6746e8bc033b96a80f738",
".git/objects/aa/ee169732b3bc0085cd3587a6d420f0dd569989": "d6226a278fc7ec5089d9147af911941a",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/a6a5ad139ce234e2d6da176f5be23b5b4e3585": "946ece0a67684273285be7bac91feefb",
".git/objects/db/f1c10d1225835ba5f0fcd312862296b05808f7": "78561c2d657fbf7bb20faf74c5a33051",
".git/objects/b0/e5049fde8bd84c09a1b9ee4139bcbba5455730": "d33c17c85c8c6f04cabb074aca5f3598",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/6a9dfa3892434414f563186d1e08a1de3ded3f": "e7d1bb1403cf1cef4520b733965b2a35",
".git/objects/e6/d3416291e75ec9353db3991aa19f73824ed297": "d44566bae8fe618b526b057e06633ec1",
".git/objects/e6/cb0a630c23955e71d1199de6d4cd9e5291939a": "18715ff27112d86c4520005f78ecdd9a",
".git/objects/f9/14e7c67f9c61ce7b936a04b7583f7a9173a497": "5e687600350884f75e29a96a89a5196b",
".git/objects/fa/2140308c6f0022f4842ffbda29b9195fbc9388": "dd8ca68b39c41034439039bf63556b85",
".git/objects/f6/71d4d8eb0903ac9fe582808f513cd0da1f57ad": "cbc3899d5375ad1c96d6bfdb880c5d70",
".git/objects/f6/7980bfe57b32f560fd414f95ade4186ec11688": "e8f36e820aa25d0c82fb47f1c26361db",
".git/objects/f1/c5861d2a743e9ec0b052d44131c7ef0ed879b5": "4cdd32515fa249cd2a56a6f5cd4a3450",
".git/objects/cb/1b5b07ef17e541023e071b6626630564647f0e": "e2b0776ee4f773bc03c7b9689a3b10ec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4a/4eeb814e46a5fcc8e3d6cd9d0a9bd16dd672ed": "0f95de092264cbbe7b3e19c2dd863e03",
".git/objects/23/5bde900318d2a830401bf289a6b59e4353f357": "c979c0c9484b97ad350f1839adab90ca",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/55d6806b478be401b1f27320587c0405b8bf29": "ef7881c8a2cf3bf96ebb23590df002c2",
".git/objects/71/391052387d27f75a868560768adb96e493f812": "bb408450e694d7426b4520d17e8d1564",
".git/objects/13/4a5bdd8f084fd3e582a93fcbb6c0b9abb3b29b": "0399cde1b343518f6768b8673c8b02ee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05c725b3a078338f1833afcc3a227ebf",
".git/logs/refs/heads/main": "05c725b3a078338f1833afcc3a227ebf",
".git/logs/refs/remotes/hub/main": "5c92548fed69bd9a5a0dd9e6c1bcc8d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ab286b14bb69fe97dc51b42860f9ddd4",
".git/refs/remotes/hub/main": "ab286b14bb69fe97dc51b42860f9ddd4",
".git/index": "e4569a3a5d273b6bc676d6b6f020835b",
".git/COMMIT_EDITMSG": "030c6af722e5187679e13239d8e7e7ae",
"assets/AssetManifest.json": "77450bfc3712172ba67d2be8b0835163",
"assets/NOTICES": "c2bc5f38e6c7f1def099031df0b04a78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "49b36b8fd88c709dacdf2a91df456b2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2c5da6949b18b7dc1325455cad9702fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "497aae05ff4a4ab1551bacbb2516c17b",
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
"assets/Assets/bubblebg.png": "8b11af0e28aac823ac4fe889a24ab9ba",
"assets/Assets/click.jpg": "59bfa576dd8e5bbe201357a6cc7dbaef",
"assets/Assets/LOGO.jpg": "e9a4fa6f1e168bcb9fdd8715f1a4bb34",
"assets/Assets/thimbi.JPG": "f607f08610f02e242f1c0dd2f95fa296",
"assets/Assets/whiteflower.jpg": "4eb86f04022a97012b1b638a28f9e586",
"assets/Assets/picsart.png": "91e1082ef94df7a6d7f3b14afc678b01",
"assets/Assets/eecha.jpg": "4ce5d3f2bc01edbc6e0e918e985ae100",
"assets/Assets/flower.jpg": "2902dcfec09c5933b6d8d089068acd11",
"assets/Assets/logoblack.JPG": "239ba9424c952dc8e085de3c15a12626",
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
