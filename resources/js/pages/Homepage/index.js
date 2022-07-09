import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';

const Homepage = () => {
    const page = <div>
        <h2>Teste</h2>
        <h1>Teste</h1>
        <Example />
    </div>;

    return (
        <Layout brand={ page }/>
    );
};

export default Homepage;