<?php

namespace App\RealWorld\Transformers;

class DevicesTransformer extends Transformer
{
    protected $resourceName = 'devices';

    public function transform($data)
    {

        return [
            'slug'        => $data['slug'],
            'model'       => $data['model'],
            'description' => $data['description'],
            'price'       => $data['price'],
            'battery'     => $data['battery'],
            'brand'       => $data['brand'],
            'camera'      => $data['camera'],
            'media'      => $data['media'],
            'categoryList'=> $data['categoryList']
        ];
    }
}