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

mix.js('resources/js/app.js', 'public/assets/js') // js geral da aplicação
.react()
.sass('resources/sass/app.scss', 'public/assets/css') // sass - inclui o bootstrap css
.scripts('node_modules/jquery/dist/jquery.min.js', 'public/assets/js/jquery.min.js') // jquery
.scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js','public/assets/js/bootstrap.js') // bootstrap js 