// import '../sass/app.scss'; // importando SASS
// import '~bootstrap/dist/js/bootstrap.bundle.js'; // importando js
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

InertiaProgress.init({
    color: '#ED3936',
    showSpinner: true
});

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}/index.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
    component: (components) => resolvePageComponent(`./components/${components}.jsx`, import.meta.glob('./components/*.jsx')),
});