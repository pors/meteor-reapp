module.exports = {
  entry: './lib/router',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        loader: 'babel', 
        exclude: /node_modules/ }
    ]
  },
  hotMiddleware: {
    reload: true
  }
};
