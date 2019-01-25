const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const entry = env.platform === 'web' ? './client/src/index.jsx' : './server/index.js';
  const outputPath = env.platform === 'web'
    ? path.join(__dirname, './public/dist')
    : path.join(__dirname, './server');
  const output = {
    filename: 'bundle.js',
    path: outputPath,
  };

  const rules = [
    {
      test: [/.jsx?$/, /.js?$/],
      exclude: [/(node_modules|bower_components)/, /\.css$/],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css$/,
      loader: 'style-loader',
    },
    {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    },
  ];

  const config = {
    mode: 'development',
    entry,
    output,
    plugins: [new webpack.IgnorePlugin(/^pg-native$/)],
    module: { rules },
  };

  if (env.platform === 'server') { config.target = 'node'; }

  return config;
};
