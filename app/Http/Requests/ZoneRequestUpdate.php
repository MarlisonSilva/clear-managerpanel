<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ZoneRequestUpdate extends FormRequest
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
            'hour_start_op' => 'required',
            'hour_end_op' => 'required',
        ];        
    }
    
    public function messages() 
    {
        return [
            'name.required' => 'O nome é obrigatório',
            'name.max' => 'O nome é muito longo',
            'hour_start_op.required' => 'O horário de início é obrigatório',
            'hour_end_op.required' => 'O horário de término é obrigatório',
        ];
    }
}
