import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';
import { Link } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function employeeIndex(props, employees, create_url){
    var employeesTable = '';
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeesTable += 
        <tr>
            <td>{ employee.name }</td>
            <td>{ employee.matriculaion }</td>
            <td>{ employee.workload }</td>
            <td>Sim</td>
        </tr>;     
    }
    console.log(create_url)
    var page = 
    <div className="row">
        <div className="col lg-6">
            <div className="card">
                    <div className="card-header">
                        <h5 className="card-title"  style={ {color: 'black'} }>Funcionários</h5>
                        <InertiaLink href={ route('employee.create') } className="btn btn-primary btn-sm">Criar funcionário</InertiaLink>
                    </div>                
                    <div className="card-body">
                
                    <div className="table-responsive">
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Localização?</th>
                                </tr>
                            </thead>

                            <tbody dangerouslySetInnerHTML={{__html: employeesTable}}></tbody>
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
