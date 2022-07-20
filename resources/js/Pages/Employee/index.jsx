import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';

const employeeIndex = () => {
    const page = 
    <div class="row">
        <div class="col lg-6">
            <div class="card">
                    <div class="card-header">
                        <h5 class="card-title"  style={ {color: 'black'} }>Funcionários</h5>
                    </div>                
                    <div class="card-body">
                
                    <div class="table-responsive">
                        <table class="table table-responsive">
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
        <Layout brand={ page }/>
    );
}; 

export default employeeIndex;