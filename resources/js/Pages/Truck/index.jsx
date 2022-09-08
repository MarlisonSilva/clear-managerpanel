import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';

const truckIndex = (props) => {
    const page = 
        <div className="row">
            <div className="col lg-6">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title"  style={ {color: 'black'} }>Caminhões</h5>
                    </div>
                    <div className="card-body">
                    
                        <div className="table-responsive">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">Motorista</th>
                                        <th scope="col">Horário</th>
                                        <th scope="col">Zona de Funcionamento</th>
                                        <th scope="col">Porcentagem</th>
                                    </tr>
                                </thead>    

                                <tbody>
                                    <tr>
                                        <td>Januario</td>
                                        <td>14h</td>
                                        <td>Norte</td>
                                        <td>45%</td>
                                    </tr>

                                    <tr>
                                        <td>Seu Madruga</td>
                                        <td>13h</td>
                                        <td>Sul</td>
                                        <td>56%</td>
                                        
                                    </tr>

                                    <tr>
                                        <td>Armando Cesar Coelho</td>
                                        <td>12h</td>
                                        <td>Leste</td>
                                        <td>95%</td>
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

export default truckIndex;