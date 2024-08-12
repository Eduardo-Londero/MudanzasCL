const path = require('path');

module.exports = {
  entry: './src/index.ts', // Punto de entrada para tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Para archivos TypeScript
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Para archivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Extensiones a resolver
  },
  mode: 'development', // Modo de desarrollo (puede ser 'production' para producción)
};