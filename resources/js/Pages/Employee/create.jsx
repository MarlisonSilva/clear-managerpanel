import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

function employeeCreate() {
    const page = 
        <div class="row">
            <h1>CREATE</h1>
        </div>;

    return (
        <Layout brand={ page }/>
    );
}

export default employeeCreate;