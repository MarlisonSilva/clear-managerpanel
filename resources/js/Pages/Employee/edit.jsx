import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Layout from '@/components/Layout';
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

function employeeEdit(props) {
    const { errors } = usePage().props

    const [values, setValues] = useState({
        name: props.employee.name,
        matriculation: props.employee.matriculation,
        workload: props.employee.workload,
    })
  
    function handleChange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    }
  
    function handleSubmit(e) {
        e.preventDefault()
        Inertia.put('/employee/'+props.employee.id, values)
    }

    const page = 
    <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
                <div className="card-header mt-2">                                            
                    <h3 style={{ color: 'black' }}>Editar funcionário</h3>                                                
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" style={{ color: 'black' }}>Nome</label> <br/>
                        <input id="name" onChange={handleChange} style={{ outline: '1px black solid' }} value={values.name} /> <br/>
                        {errors.name && <div>{errors.name}</div>} <br/>

                        <label htmlFor="matriculation" style={{ color: 'black' }}>Matrícula</label> <br/>
                        <input id="matriculation" onChange={handleChange} style={{ outline: '1px black solid' }} value={values.matriculation} /> <br/>
                        {errors.matriculation && <div>{errors.matriculation}</div>} <br/>

                        <label htmlFor="workload" style={{ color: 'black' }}>Carga Horária</label> <br/>
                        <input id="workload" onChange={handleChange} style={{ outline: '1px black solid' }} value={values.workload} /> <br/>
                        {errors.workload && <div>{errors.workload}</div>} <br/>
                        <button type="submit" style={{ outline: '1px black solid' }} >Enviar</button>
                    </form>            
                </div>
            </div>
        </div>
    </div>;

    return (
        <Layout brand={ page } auth={props.auth}/>
    );
}

export default employeeEdit;