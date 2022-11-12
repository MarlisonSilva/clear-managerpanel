import React from 'react';
import Layout from '../../components/Layout';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReceiverMap from '../../components/ReceiverMap';
import SenderMap from '../../components/SenderMap';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

import '../../../assets/css/map.css';

const Homepage = (props) => {
    const page = <div>
        <ReceiverMap></ReceiverMap>
        <SenderMap></SenderMap>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth} />        
    );
};

export default Homepage;