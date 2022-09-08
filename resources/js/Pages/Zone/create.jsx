import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

function zoneCreate(props) {
    const page = 
        <div className="row">
            <h1>CREATE</h1>
        </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}

export default zoneCreate;