import React from 'react';
import Layout from '@/components/Layout';
import { Link } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'

const truckIndex = (props) => {
    var trucksTable = [];
    console.log(props.trucks[0])
    for (let i = 0; i < props.trucks.length; i++) {
        const truck = props.trucks[i];
        console.log(trucksTable)
        if (truck.status)
            var status = "Sim"
        else 
            var status = "Não"

        trucksTable.push(
        <tr>
            <td>{ truck.name }</td>
            <td>{ truck.activated_time }</td>
            <td>{ truck.mileage } km</td>
            <td>{ status }</td>            
            <td>
                <div>
                    <InertiaLink href={ route('truck.edit', truck.id) } className="btn btn-primary btn-sm mx-1">
                        <i className="icon-pencil"></i> 
                    </InertiaLink>

                    <InertiaLink href={ route('truck.show', truck.id) } className="btn btn-primary btn-sm mx-1">
                        <i className="icon-eye"></i>
                    </InertiaLink>

                    <Link onClick={ (e) => { e.preventDefault(); Inertia.delete('/truck/'+truck.id, ); } } className="btn btn-primary btn-sm mx-1">
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
                            <h3>Caminhões</h3>
                        </div>
                        <div className="col">
                            <div className="card-action">
                                <InertiaLink href={ route('truck.create') } className="btn btn-dark">
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
                                    <th scope="col">Tempo ativo</th>
                                    <th scope="col">Quilometragem</th>
                                    <th scope="col">Ativo?</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                { trucksTable }
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

export default truckIndex;