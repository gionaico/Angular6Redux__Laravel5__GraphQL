<?php

namespace App\GraphQL\Type;

use App\User;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UsersType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Users',
        'description' => 'A type',
        'model' => User::class,
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the device'
            ],
            'username' => [
                'type' => Type::string(),
                'description' => 'The model of device'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The model of device'
            ],
            'password' => [
                'type' => Type::string(),
                'description' => 'The model of device'
            ],
            
            
        ];
    }

   /* protected function resolveEmailField($root, $args)
    {
        return strtolower($root->email);
    }*/
}
