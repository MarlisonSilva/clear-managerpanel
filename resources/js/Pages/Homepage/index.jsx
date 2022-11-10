import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReceiverMap from '../../components/ReceiverMap';
import SenderMap from '../../components/SenderMap';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

import '../../../assets/css/map.css';

const Homepage = (props) => {
    const page = <div>
        <h2>Teste</h2>
        <h1>Teste</h1>
        <Example />
        <ReceiverMap></ReceiverMap>
        <SenderMap></SenderMap>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth} />        
    );
};

export default Homepage;