import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';

const zoneIndex = () => {
    const page = 
    <div class="row">
        <div class="col lg-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title"  style={ {color: 'black'} }>Zonas</h5>
                </div>
                <div class="card-body">
                
                    <div class="table-responsive">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">Nome da Zona</th>
                                    <th scope="col">Bairros Contemplados</th>
                                    <th scope="col">Caminhões Rodando</th>
                                    <th scope="col">Dia da Semana</th>
                                </tr>
                            </thead>    

                            <tbody>
                                <tr>
                                    <td>Norte</td>
                                    <td>Vila Cruzeiro, Cariri, Canadá</td>
                                    <td>1</td>
                                    <td>Terça/Quinta</td>
                                </tr>

                                <tr>
                                    <td>Leste</td>
                                    <td>Estados Únidos, Brasília, China</td>
                                    <td>1</td>
                                    <td>Segunda/Sexta</td>
                                    
                                </tr>

                                <tr>
                                    <td>Oeste</td>
                                    <td>João 23, João 22, João 21</td>
                                    <td>2</td>
                                    <td>Segunta/Terça/Quarta</td>
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

export default zoneIndex;