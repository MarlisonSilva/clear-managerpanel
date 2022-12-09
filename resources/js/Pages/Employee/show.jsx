import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@/components/Layout';
import { InertiaLink } from '@inertiajs/inertia-react';

function employeeShow(props) {
    const page =
        <div className="row">
            <div className="col-12 col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <div className="row mt-2">
                            <div className="col">
                                <h3>Sobre {props.employee.name}</h3>
                            </div>
                            <div className="col">
                                <div className="card-action">
                                    <InertiaLink href={route('zone.index')} className="btn btn-dark btn-sm">
                                        Voltar
                                    </InertiaLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <dl class="row">
                            <dt class="col-3 col-md-2">ID</dt>
                            <dd class="col-9 col-md-10">{props.employee.id}</dd>
                            <dt class="col-3 col-md-2">Nome</dt>
                            <dd class="col-9 col-md-10">{props.employee.name}</dd>
                            <dt class="col-3 col-md-2">Matrícula</dt>
                            <dd class="col-9 col-md-10">{props.employee.matriculation}</dd>
                            <dt class="col-3 col-md-2">CH</dt>
                            <dd class="col-9 col-md-10">{props.employee.workload} hr</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>;

    return (
        <Layout brand={page} auth={props.auth} />
    );
}

export default employeeShow;