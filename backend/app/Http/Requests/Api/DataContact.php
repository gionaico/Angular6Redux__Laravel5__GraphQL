<?php

namespace App\Http\Requests\Api;

class DataContact extends ApiRequest
{
    /**
     * Get data to be validated from the request.
     *
     * @return array
     */
    protected function validationData()
    {
        return $this->get('contact') ?: [];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:4|max:15',
            'email' => 'required|email|max:30',
            'subject' => 'required|string',
            'comment' => 'required|string|min:8|max:200',
        ];
    }
}
