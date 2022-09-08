import React from 'react';
import Example from '../../components/Example';
import Layout from '../../components/Layout';

const zoneIndex = (props) => {
    const page = 
    <div className="row">
        <div className="col lg-6">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title"  style={ {color: 'black'} }>Zonas</h5>
                </div>
                <div className="card-body">
                
                    <div className="table-responsive">
                        <table className="table table-responsive">
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
        <Layout brand={ page } auth={props.auth}/>
    );
}; 

export default zoneIndex;