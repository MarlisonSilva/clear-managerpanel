import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';
import { Link } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default function employeeIndex(props){

    var employeesTable = [];
    console.log(props.employees[0])
    for (let i = 0; i < props.employees.length; i++) {
        const employee = props.employees[i];
        console.log(employeesTable)    
        employeesTable.push(
        <tr>
            <td>{ employee.name }</td>
            <td>{ employee.matriculation }</td>
            <td>{ employee.workload } hr</td>
            <td>NA</td>
            <td>
                <div>
                    <InertiaLink href={ route('employee.edit', employee.id) } className="btn btn-primary btn-sm mx-1">
                        <i className="icon-pencil"></i> 
                    </InertiaLink>

                    <InertiaLink href={ route('employee.show', employee.id) } className="btn btn-primary btn-sm mx-1">
                        <i className="icon-eye"></i>
                    </InertiaLink>

                    <Link onClick={ (e) => { e.preventDefault(); Inertia.delete('/employee/'+employee.id, ); } } className="btn btn-primary btn-sm mx-1">
                        <i className="icon-trash"></i>
                    </Link>
                </div>
            </td>
        </tr>);
    }

    
    var page = 
    <div className="row">
        <div className="col lg-6">
            <div className="card">
                <div className="card-header">
                    <div className="row mt-2">
                        <div className="col">
                            <h3 style={{ color: 'black' }}>Funcionários</h3>
                        </div>
                        <div className="col">
                            <div className="card-action">
                                <InertiaLink href={ route('employee.create') } className="btn btn-dark">
                                    <i className="icon-plus"></i>
                                </InertiaLink>
                            </div>
                        </div>
                    </div>
                </div>         
                    <div className="card-body">
                
                    <div className="table-responsive">
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Matrícula</th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Localização?</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                { employeesTable }
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
}; 
