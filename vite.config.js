import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
const path = require('path')


export default defineConfig({
    resolve: {
        alias: {
          '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js'
        ]),
        react(),
    ],
});