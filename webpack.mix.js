const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue() // ==> see https://stackoverflow.com/questions/65607153/laravel-vue-you-may-need-an-appropriate-loader-to-handle-this-file-type
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
