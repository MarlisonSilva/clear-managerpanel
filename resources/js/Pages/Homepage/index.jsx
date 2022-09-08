import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

const Homepage = (props) => {
    const page = <div>
        <h2>Teste</h2>
        <h1>Teste</h1>
        <Example />
    </div>;

    return (
        <Layout brand={ page } auth={props.auth} />
    );
};

export default Homepage;