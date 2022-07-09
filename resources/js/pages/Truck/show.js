import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

function truckShow() {
    const page = 
        <div class="row">
            <h1>SHOW</h1>
        </div>;

    return (
        <Layout brand={ page }/>
    );
}

export default truckShow;