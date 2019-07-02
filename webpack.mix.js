const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.combine(["public/js/app.js", "public/js/scripts.js"], 'public/js/combined.js');

// mix.sass('resources/assets/sass/app.scss', 'public/assets/css/app.css')
//     .js('resources/assets/js/app.js', 'public/assets/js/app.js');


mix.react('resources/js/app.js', 'public/js');


mix.sass('resources/sass/app.scss', 'public/css');

