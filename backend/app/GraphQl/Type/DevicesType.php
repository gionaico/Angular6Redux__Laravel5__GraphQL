<?php

namespace App\GraphQL\Type;

use App\Devices;
use App\Category;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class DevicesType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Devices',
        'description' => 'A type',
        'model' => Devices::class,
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the device'
            ],
            'model' => [
                'type' => Type::string(),
                'description' => 'The model of device'
            ],
            'description' => [
                'type' => Type::string(),
                'description' => 'The description of device'
            ],
            'price' => [
                'type' => Type::string(),
                'description' => 'The price of device'
            ],
            'battery' => [
                'type' => Type::string(),
                'description' => 'The model of device'
            ],
            'brand' => [
                'type' => Type::string(),
                'description' => 'The brand of device'
            ],
            'camera' => [
                'type' => Type::string(),
                'description' => 'The camera of device'
            ],
            'slug' => [
                'type' => Type::string(),
                'description' => 'The slug of device'
            ],
            'media' => [
                'type' => Type::string(),
                'description' => 'The media of device'
            ],
            'category_id' => [
                'type' => Type::string(),
                'description' => 'The category of device'
            ],
           /* 'categories' => [
                'type' => GraphQL::type('categories'),
                'description' => 'The profile of the user'
            ]*/
            
            
            
        ];
    }

   /* protected function resolveEmailField($root, $args)
    {
        return strtolower($root->email);
    }*/
}
use App\GraphQL\Type\CategoriesType;

