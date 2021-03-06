module.exports = {
  context: __dirname + "/app",
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 1000
  },
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    sourceMapFilename: '[file].map'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [__dirname, /components/],
      }
    ],
    loaders: [
      {
        // STYLESHEETS
        test: /\.scss$/,
        include: /stylesheets/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        // IMAGES
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        // HOT-SWAP REACT COMPONENTS
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        // RAW FILE COPY
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        // REACT / BABEL
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [__dirname, /components/],
        loader: ["babel"],
        query: {
          presets:["es2015", "react"]
        }
      }
    ],
  }
}
