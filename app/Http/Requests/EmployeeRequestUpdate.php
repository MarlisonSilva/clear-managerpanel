<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequestUpdate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|max:200',
            'matriculation' => 'required|max:50',
            'workload' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O nome é obrigatório',
            'name.max' => 'O nome é muito longo',
            'matriculation.required' => 'A matrícula é obrigatória',
            'matriculation.max' => 'O matrícula é muito longa',
            'workload.required' => 'A carga horária é obrigatória',
            'workload.integer' => 'A carga horária deve conter apenas números',
        ];
    }
}
