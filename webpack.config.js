module.exports = {
  context: __dirname + "/app",
  entry: {
  javascript: "./app.js",
  html: "./index.html",
},
  module: {
    loaders: [
    {
      // STYLESHEETS
      test: /\.scss$/,
      include: /stylesheets/,
      loaders: [
        'style',
        'css'
      ]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'url?limit=8192',
        'img'
      ]
    },
    {
      // HOT-SWAP REACT COMPONENTS
      test: /\.js$/,
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
      test: /\.js$/,
      exclude: /node_modules/,
      loader: ["babel"],
      query:
      {
        presets:["es2015", "react"]
      }
    },
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      include: /components/,
      loader: ["babel"],
      query:
      {
        presets:["es2015", "react"]
      }
    }
  ],
},
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}