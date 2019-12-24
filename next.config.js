const withOffline = require('next-offline')


const nextConfig = {
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
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssLoaderOptions: {
    url: false
    }
}) 

module.exports = withOffline(nextConfig)