import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

function employeeEdit() {
    const page = 
        <div class="row">
            <h1>EDIT</h1>
        </div>;

    return (
        <Layout brand={ page }/>
    );
}

export default employeeEdit;