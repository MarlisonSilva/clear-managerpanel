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
                <div className="card-header">                                            
                    <h3>Editar funcionário</h3>                                                
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome</label>
                        <input id="name" className='form-control mb-2' onChange={handleChange} value={values.name} />
                        {errors.name && <div>{errors.name}</div>}

                        <label htmlFor="matriculation">Matrícula</label>
                        <input id="matriculation" className='form-control mb-2' onChange={handleChange} value={values.matriculation} />
                        {errors.matriculation && <div>{errors.matriculation}</div>}

                        <label htmlFor="workload">Carga Horária</label>
                        <input id="workload" className='form-control mb-3' onChange={handleChange} value={values.workload} />
                        {errors.workload && <div>{errors.workload}</div>}
                        <button type="submit" className='btn btn-primary btn-sm'>Enviar</button>
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