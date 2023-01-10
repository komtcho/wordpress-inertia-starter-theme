// webpack.mix.js

let mix = require('laravel-mix')

mix.js('src/js/app.js', 'dist')
  .vue({
    version: 3
  })
  .setPublicPath('dist')
  .version();

mix.postCss('src/css/app.css', 'dist', [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
]).setPublicPath('dist');