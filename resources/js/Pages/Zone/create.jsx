import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Layout from '@/components/Layout';
import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default function zoneCreate(props) {
    const { errors } = usePage().props

    const [values, setValues] = useState({
        name: "",
        hour_start_op: "",
        hour_end_op: "",
    })
  
    function handleChange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    }
  
    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/zone', values)
    }

    const page = 
    <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
                <div className="card-header mt-2">                                            
                    <h3>Criar zona</h3>                                                
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome</label>
                        <input id="name" className='form-control mb-2' onChange={handleChange} value={values.name} />
                        {errors.name && <div>{errors.name}</div>}

                        <label htmlFor="hour_start_op">Hora de início do funcionamento</label>
                        <input id="hour_start_op" className='form-control mb-2' onChange={handleChange} value={values.hour_start_op} />
                        {errors.hour_start_op && <div>{errors.hour_start_op}</div>}

                        <label htmlFor="hour_end_op">Hora de término do funcionamento</label>
                        <input id="hour_end_op" className='form-control mb-3' onChange={handleChange} value={values.hour_end_op} />
                        {errors.hour_end_op && <div>{errors.hour_end_op}</div>}

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