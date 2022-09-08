import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';

const employeeIndex = (props) => {
    const page = 
    <div className="row">
        <div className="col lg-6">
            <div className="card">
                    <div className="card-header">
                        <h5 className="card-title"  style={ {color: 'black'} }>Funcionários</h5>
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

                            <tbody>
                                <tr>
                                    <td>Januario</td>
                                    <td>111.111.111-11</td>
                                    <td>7h até 16h</td>
                                    <td>Sim</td>
                                </tr>

                                <tr>
                                    <td>Seu Madruga</td>
                                    <td>222.222.222-22</td>
                                    <td>8h até 18h</td>
                                    <td>Não</td>
                                    
                                </tr>

                                <tr>
                                    <td>Armando Cesar Coelho</td>
                                    <td>333.333.333-33</td>
                                    <td>9h até 20h</td>
                                    <td>Sim</td>
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
}; 

export default employeeIndex;