module.exports = {
  entry: './server',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        loader: 'babel', 
        exclude: /node_modules/ }
    ]
  }
};
