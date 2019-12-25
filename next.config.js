const withOffline = require('next-offline')  
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')


module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'file-loader'],
        }
      ],
    },
  };

module.exports = withOffline(
  withCSS({
    cssLoaderOptions: {
    url: false
    }
  })
)

// module.exports = withOffline({
//   devSwSrc: '/service-worker.js'
// })

// model.exports = withPlugins([
//   [withCSS, {
//     cssLoaderOptions: {
//       url: false
//     }
//   }], 
//   [withOffline, {
//     workboxOpts: {
//       swDest: 'workbox-service-worker.js',
//       globPatterns: ['static/**/*'],
//       globDirectory: '.',
//       runtimeCaching: [
//         {
//           urlPattern: /^https?.*/,
//           handler: 'NetworkFirst',
//           options: {
//             cacheName: 'offlineCache',
//             expiration: {
//               maxEntries: 200,
//             },
//           },
//         },
//       ],
//     },
//   }]
// ])

// const nextConfig = {
//   target: 'serverless',
//   transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
//   // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
//   // turn on the SW in dev mode so that we can actually test it
//   generateInDevMode: true,
//   workboxOpts: {
//     swDest: 'static/service-worker.js',
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: 'NetworkFirst',
//         options: {
//           cacheName: 'https-calls',
//           networkTimeoutSeconds: 15,
//           expiration: {
//             maxEntries: 150,
//             maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
//           },
//           cacheableResponse: {
//             statuses: [0, 200],
//           },
//         },
//       },
//     ],
//   },
// };

// module.exports = withOffline(nextConfig)

// const nextConfig = {

// }
 
// module.exports = withOffline(nextConfig)