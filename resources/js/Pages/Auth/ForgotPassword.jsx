import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Esqueci minha senha" />
            <h1 className="text-center mt-2 mb-4">Esqueci minha senha</h1>

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Esqueceu sua senha? Sem problemas. Digite seu endereço de e-mail e nós enviaremos um link para você resetar sua senha!
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 form-control"
                    isFocused={true}
                    handleChange={onHandleChange}
                    placeholder="seunome@email.com"
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="d-flex align-items-center justify-content-between mt-4">
                    
                    
                    <Link
                        href={ route('login') }
                        className="btn btn-sm btn-secondary"
                    >
                        Voltar
                    </Link>

                    <button className="btn btn-sm btn-primary" processing={processing}>
                        Enviar e-mail para mim
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
