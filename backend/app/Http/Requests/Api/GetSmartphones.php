<?php

namespace App\Http\Requests\Api;

class GetSmartphones extends ApiRequest
{
    /**
     * Get data to be validated from the request.
     *
     * @return array
     */
    protected function validationData()
    {
        return $this->get('smartphones') ?: [];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'battery' => 'required|string',
            'inches' => 'required|string',
            'system' => 'required|string',
            'model' => 'required|string',
            'brand' => 'required|string',
            'camera' => 'required|string',
            'pixels' => 'required|string'
        ];
    }
}
