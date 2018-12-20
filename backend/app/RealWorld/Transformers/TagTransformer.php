<?php

namespace App\RealWorld\Transformers;

class TagTransformer extends Transformer
{
    protected $resourceName = 'category';

    public function transform($data)
    {
        return $data;
    }
}