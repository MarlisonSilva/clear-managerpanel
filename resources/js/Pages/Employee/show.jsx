import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/Layout';

function employeeShow(props) {
    const page = 
    <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
                <div className="card-header mt-2">                                            
                    <h3 style={{ color: 'black' }}>Ver { props.employee.name }</h3>                                                
                </div>

                <div className="card-body">
                    <ul>
                        <li>ID: { props.employee.id }</li>
                        <li>Nome: { props.employee.name }</li>
                        <li>Matrícula: { props.employee.matriculation }</li>
                        <li>CH: { props.employee.workload }</li>
                    </ul>          
                </div>
            </div>
        </div>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}

export default employeeShow;