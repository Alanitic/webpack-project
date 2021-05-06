module.exports = {
  entry: './src/client/index.js',
  output: {
    libraryTarget: 'var',
    library: 'Client',
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
};
