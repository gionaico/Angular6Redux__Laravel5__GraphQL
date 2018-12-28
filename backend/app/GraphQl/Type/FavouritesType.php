<?php

namespace App\GraphQL\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\Type;

use App\Favourites;

class FavouritesType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Favourites',
        'description' => 'A type',
        'model' => Favourites::class,
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the favourites table'
            ],
            'user_id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user'
            ],
            'device' => [
                'type' => GraphQL::type('devices'),
                'description' => 'Favourite devices of this user'
            ]
            
        ];
    }

}
