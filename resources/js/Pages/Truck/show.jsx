import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@/components/Layout';
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
                                <h3>{props.truck.name}</h3>
                            </div>
                            <div className="col">
                                <div className="card-action">
                                    <InertiaLink href={route('truck.index')} className="btn btn-dark btn-sm">
                                        Voltar
                                    </InertiaLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <dl class="row">
                            <dt class="col-3 col-md-2">ID</dt>
                            <dd class="col-9 col-md-10">{props.truck.id}</dd>
                            <dt class="col-3 col-md-2">Nome</dt>
                            <dd class="col-9 col-md-10">{props.truck.name}</dd>
                            <dt class="col-3 col-md-2">Tempo ativo</dt>
                            <dd class="col-9 col-md-10">{props.truck.activated_time}</dd>
                            <dt class="col-3 col-md-2">Quilometrage</dt>
                            <dd class="col-9 col-md-10">{props.truck.mileage} km</dd>
                            <dt class="col-3 col-md-2">Ativo?</dt>
                            <dd class="col-9 col-md-10">{status}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>;

    return (
        <Layout brand={page} auth={props.auth} />
    );
}

export default truckShow;