<?php

namespace App\GraphQL\Type;

use App\Category;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class CategoriesType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Categories',
        'description' => 'A type',
        'model' => Category::class,
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the category'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of category'
            ],
            'description' => [
                'type' => Type::string(),
                'description' => 'The description of category'
            ],
            'slug' => [
                'type' => Type::string(),
                'description' => 'The slug of category'
            ]
            
        ];
    }

   /* protected function resolveEmailField($root, $args)
    {
        return strtolower($root->email);
    }*/
}
