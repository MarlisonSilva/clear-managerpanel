import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Layout from '@/components/Layout';
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

function truckEdit(props) {
    const { errors } = usePage().props

    const [values, setValues] = useState({
        name: props.truck.name,
    })
  
    function handleChange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    }
  
    function handleSubmit(e) {
        e.preventDefault()
        Inertia.put('/truck/'+props.truck.id, values)
    }
    
    const page = 
    <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
                <div className="card-header mt-2">                                            
                    <h3>Editar { props.truck.name }</h3>                                                
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome</label>
                        <input id="name" className='form-control mb-3' onChange={handleChange} value={values.name} />
                        {errors.name && <div>{errors.name}</div>}
                        <button type="submit" className="btn btn-primary btn-sm">Enviar</button>

                    </form>            
                </div>
            </div>
        </div>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}

export default truckEdit;