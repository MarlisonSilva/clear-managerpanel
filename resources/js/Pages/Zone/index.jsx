import React from 'react';
import Layout from '@/components/Layout';
import { Link } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'

const zoneIndex = (props) => {
    var zonesTable = [];
    console.log(props.zones[0])
    for (let i = 0; i < props.zones.length; i++) {
        const zone = props.zones[i];
        console.log(zonesTable)
        if (zone.status)
            var status = "Sim"
        else 
            var status = "Não"

        zonesTable.push(
        <tr>
            <td>{ zone.name }</td>
            <td>{ zone.hour_start_op }</td>
            <td>{ zone.hour_end_op }</td>
            <td>{ zone.percentage }%</td>
            <td>{ status }</td>            
            <td>
                <div>
                    <InertiaLink href={ route('zone.edit', zone.id) } className="btn btn-primary btn-sm mx-1">
                        <i className="icon-pencil"></i> 
                    </InertiaLink>

                    <InertiaLink href={ route('zone.show', zone.id) } className="btn btn-primary btn-sm mx-1">
                        <i className="icon-eye"></i>
                    </InertiaLink>

                    <Link onClick={ (e) => { e.preventDefault(); Inertia.delete('/zone/'+zone.id, ); } } className="btn btn-primary btn-sm mx-1">
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
                            <h3 style={{ color: 'black' }}>Zonas</h3>
                        </div>
                        <div className="col">
                            <div className="card-action">
                                <InertiaLink href={ route('zone.create') } className="btn btn-dark">
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
                                    <th scope="col">Horário de início</th>
                                    <th scope="col">Horário de término</th>
                                    <th scope="col">Porcentagem</th>
                                    <th scope="col">Ativo?</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                { zonesTable }
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

export default zoneIndex;