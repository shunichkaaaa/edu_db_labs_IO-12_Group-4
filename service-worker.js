/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "75d7263d247947be6090223b75e6d3df"
  },
  {
    "url": "assets/css/0.styles.bfba66be.css",
    "revision": "a77923c66561e2819ae38de5f5dc4be2"
  },
  {
    "url": "assets/img/after-delete.cdb74214.jpg",
    "revision": "cdb7421417362ca101c0949284db0493"
  },
  {
    "url": "assets/img/before-delete.3ccd37f7.jpg",
    "revision": "3ccd37f7bd951e164e3f34a1eab6f5dd"
  },
  {
    "url": "assets/img/console.f103256d.jpg",
    "revision": "f103256d13d749f13cb85a96749f2808"
  },
  {
    "url": "assets/img/create.13e34c8f.jpg",
    "revision": "13e34c8fd8dff94c691ce9dfadd60cfb"
  },
  {
    "url": "assets/img/database_scheme.6f9605fe.png",
    "revision": "6f9605fe82b8cfd16f2452cce3ec8dc1"
  },
  {
    "url": "assets/img/delete.27be54a3.jpg",
    "revision": "27be54a3a25765eeb096d17616d29f22"
  },
  {
    "url": "assets/img/getAll.08bbd94f.jpg",
    "revision": "08bbd94f5d91bfb1649cfc728ed2c261"
  },
  {
    "url": "assets/img/getOne.e14567fe.jpg",
    "revision": "e14567fea6cef4728e2db6108fcb9f83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update.42c08ded.jpg",
    "revision": "42c08ded3a2b4d979fda0d665e5450de"
  },
  {
    "url": "assets/js/10.d4f8710e.js",
    "revision": "6b404db6909321274b8c0766fcab0286"
  },
  {
    "url": "assets/js/11.5b3a880f.js",
    "revision": "2bcb07b11f958b82fdc20cdbf1e38198"
  },
  {
    "url": "assets/js/12.a78fcacd.js",
    "revision": "251421fa5c2535cadf694c7fc1a5040a"
  },
  {
    "url": "assets/js/13.883f16c7.js",
    "revision": "86f94e346823477fb32dcbb89b07ba2a"
  },
  {
    "url": "assets/js/14.1ef9e106.js",
    "revision": "fe29c22c40b86d8b6507c8979ac9e73d"
  },
  {
    "url": "assets/js/15.8cd9f5f4.js",
    "revision": "e902671e31f3017720c90283b416cb5a"
  },
  {
    "url": "assets/js/16.b261878b.js",
    "revision": "b7e5463ffe2e04ec85bd72f4244afee7"
  },
  {
    "url": "assets/js/17.25baf51d.js",
    "revision": "e97747c1948be6b0c0c118f13154a3f9"
  },
  {
    "url": "assets/js/18.ab9065e4.js",
    "revision": "4845486cde5a144e2c703da9cfdfca91"
  },
  {
    "url": "assets/js/19.0ad9747f.js",
    "revision": "a9ee22fb0729ff6bcc27808fcd98c87d"
  },
  {
    "url": "assets/js/2.21dfbd12.js",
    "revision": "34554b0354a146605f714b68f758c559"
  },
  {
    "url": "assets/js/20.d8eaa887.js",
    "revision": "13fd923d26566076282c331fa8bae30a"
  },
  {
    "url": "assets/js/21.3746777b.js",
    "revision": "fca79fe860026e255dfefb689627869c"
  },
  {
    "url": "assets/js/22.d15dd3b1.js",
    "revision": "a643618e80951c177291e274e773a7f7"
  },
  {
    "url": "assets/js/23.a055a33b.js",
    "revision": "a5b59f90c1ce587c719ee1392bfef49b"
  },
  {
    "url": "assets/js/24.9fcf4a3d.js",
    "revision": "62c1e24602478841f08f9968c383e1b3"
  },
  {
    "url": "assets/js/26.2e99f479.js",
    "revision": "ddf4c64c8a650fdd3e859292777a7be7"
  },
  {
    "url": "assets/js/3.004af825.js",
    "revision": "f0efa10441560309365ac7f2e777885b"
  },
  {
    "url": "assets/js/4.3a479a52.js",
    "revision": "5564a8a9a649c01816fa441a4bd8c1e0"
  },
  {
    "url": "assets/js/5.591a8bc0.js",
    "revision": "f9a78b417e9890c5d6bae4603a80c1b4"
  },
  {
    "url": "assets/js/6.a8273a57.js",
    "revision": "67781f217419c34dd494ebae3811fa25"
  },
  {
    "url": "assets/js/7.0ce18a35.js",
    "revision": "e2cf75785c9856dbb76909125f599cbe"
  },
  {
    "url": "assets/js/8.1e02a0c3.js",
    "revision": "b8bbcb022dfb6ac3f6a02a9e05236a12"
  },
  {
    "url": "assets/js/9.90aafb89.js",
    "revision": "c643f266b83cefe81f35424ea88bb856"
  },
  {
    "url": "assets/js/app.093206e8.js",
    "revision": "cde498714a33288d6314515d143c1326"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b513900aac6b3c6acc7e782d105c46d5"
  },
  {
    "url": "design/index.html",
    "revision": "ac05acc4b91b91a47cd337429e559ffa"
  },
  {
    "url": "index.html",
    "revision": "9e1bf2465701206da6d8fd17fceaface"
  },
  {
    "url": "intro/index.html",
    "revision": "f3e2860b1dc1f3fd8dfbd97b5e08b491"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8fa4c21f20353409af746699f64bc4d0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2e5b6f47489033891fbe7f0adebe3985"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0fb097b8fed5e578f0c20d1968f686b6"
  },
  {
    "url": "software/index.html",
    "revision": "ec1ed59aadbc72212f57482ee5ded427"
  },
  {
    "url": "test/index.html",
    "revision": "c9bd6fd634b8f081aa63859de09ffb1e"
  },
  {
    "url": "use cases/index.html",
    "revision": "13896b255d2e4bf05f51b50e14b263ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
