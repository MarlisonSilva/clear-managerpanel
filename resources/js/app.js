import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init({
    color: '#ED3936',
    showSpinner: true
});

createInertiaApp({
    resolve: name => require(`./pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
});