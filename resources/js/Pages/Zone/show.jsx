import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

function zoneShow(props) {
    const page = 
        <div className="row">
            <h1>SHOW</h1>
        </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}

export default zoneShow;