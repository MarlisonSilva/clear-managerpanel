import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';
import { InertiaLink } from '@inertiajs/inertia-react';

function truckShow(props) {
    if (props.truck.status)
        var status = "Sim";
    else 
        var status = "Não";

    const page = 
    <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
                <div className="card-header">                                            
                    <div className="row mt-2">
                        <div className="col">
                            <h3 style={{ color: 'black' }}>{ props.truck.name }</h3>
                        </div>
                        <div className="col">
                            <div className="card-action">
                                <InertiaLink href={ route('truck.index') } className="btn btn-dark btn-sm">
                                    Voltar
                                </InertiaLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <ul>
                        <li>ID: { props.truck.id }</li>
                        <li>Nome: { props.truck.name }</li>
                        <li>Tempo ativo: { props.truck.activated_time }</li>
                        <li>Quilometrage: { props.truck.mileage } km</li>
                        <li>Ativo? { status }</li>
                    </ul>          
                </div>
            </div>
        </div>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}

export default truckShow;