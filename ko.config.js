const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (context) => {
  const { webpack } = context;
  return {
    "server": {
      "host": "127.0.0.1",
      "port": 3002
    },
    "proxy": [{
      "context": ["/auth", "/api"],
      "target": "http://localhost:3000"
    }],
    dll:[],
    webpack: {
      entry: {popup:path.resolve(__dirname,'src/index.js')},
      output: {},
      module: {
        rules: []
      },
      plugins: [
        new webpack.DefinePlugin({
          ASSETS_VERSION: '0.0.1',
        }),
        new CopyWebpackPlugin([
          {
            from: path.resolve('extension/'),
            to: path.resolve('dist')
          }
        ])
      ],
      resolve: {
        alias: { 
          "@": path.resolve(__dirname, 'src'),
          assets: path.resolve(__dirname, 'public/assets/'),
          pages: path.resolve(__dirname, 'src/pages/'),
          component: path.resolve(__dirname, 'src/components/'),
          tpls: path.resolve(__dirname, 'src/tpls/')
        },
      }
    }
  };
};