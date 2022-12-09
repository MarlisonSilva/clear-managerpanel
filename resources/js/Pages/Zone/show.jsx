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
                            <h3>{ props.zone.name }</h3>
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
 
                    <dl class="row">
                            <dt class="col-md-4">ID</dt>
                            <dd class="col-md-8">{props.zone.id}</dd>
                            <dt class="col-md-4">Nome</dt>
                            <dd class="col-md-8">{props.zone.name}</dd>
                            <dt class="col-md-4">Horário de início do funcionamento</dt>
                            <dd class="col-md-8">{props.zone.hour_start_op}</dd>
                            <dt class="col-md-4">Horário de término do funcionamento</dt>
                            <dd class="col-md-8">{props.zone.hour_end_op}</dd>
                            <dt class="col-md-4">Porcentagem</dt>
                            <dd class="col-md-8">{props.zone.percentage} %</dd>
                            <dt class="col-md-4">Ativo?</dt>
                            <dd class="col-md-8">{status}</dd>
                        </dl>
                </div>
            </div>
        </div>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}

export default zoneShow;