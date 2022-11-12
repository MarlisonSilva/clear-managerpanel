import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@/components/Layout';
import { InertiaLink } from '@inertiajs/inertia-react';

function zoneShow(props) {
    if (props.zone.status)
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
                            <h3 style={{ color: 'black' }}>{ props.zone.name }</h3>
                        </div>
                        <div className="col">
                            <div className="card-action">
                                <InertiaLink href={ route('zone.index') } className="btn btn-dark btn-sm">
                                    Voltar
                                </InertiaLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <ul>
                        <li>ID: { props.zone.id }</li>
                        <li>Nome: { props.zone.name }</li>
                        <li>Horário de início do funcionamento: { props.zone.hour_start_op }</li>
                        <li>Horário de término do funcionamento: { props.zone.hour_end_op }</li>
                        <li>Porcentagem: { props.zone.percentage }%</li>
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

export default zoneShow;