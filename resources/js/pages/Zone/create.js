import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

function zoneCreate() {
    const page = 
        <div class="row">
            <h1>CREATE</h1>
        </div>;

    return (
        <Layout brand={ page }/>
    );
}

export default zoneCreate;