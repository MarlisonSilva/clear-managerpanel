import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function employeeCreate(props) {
    const page = 
    <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h3 style={{ color: 'black' }}>Funcionários</h3>
                        </div>
                        <div className="col">
                            <div className="card-action">
                                <InertiaLink href={ route('employee.create') } className="btn btn-light">
                                    <i className="icon-plus"></i>
                                </InertiaLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table align-items-center table-flush table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Matrícula</th>
                                    <th scope="col">Carga horária</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">João</th>
                                    <th scope="row">1212212</th>
                                    <th scope="row">12 hr</th>
                                    <th scope="row">99 99999-9999</th>
                                    <td>
                                        <div className="d-flex flex-row justify-content-around">
                                            <InertiaLink className="me-2"
                                                href={ route('employee.edit', 1) }>
                                                <i className="icon-pencil"></i>
                                            </InertiaLink>

                                            <InertiaLink className="me-2"
                                                href={ route('employee.show', 1) } method="">
                                                <i className="icon-user"></i>
                                            </InertiaLink>

                                            <InertiaLink>
                                                <i className="icon-trash"></i>
                                            </InertiaLink>

                                            <form id="1"
                                                action={ route('employee.destroy', 1) }
                                                method="POST">
                                                
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}