import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';

const truckIndex = () => {
    const page = 
        <div class="row">
            <div class="col lg-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title"  style={ {color: 'black'} }>Caminhões</h5>
                    </div>
                    <div class="card-body">
                    
                        <div class="table-responsive">
                            <table class="table table-responsive">
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
        <Layout brand={ page }/>
    );
}; 

export default truckIndex;