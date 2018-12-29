<?php

namespace App\GraphQL\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
/* use Rebing\GraphQL\Support\Facades\GraphQL; */
use App\Favourites;
use GraphQL\Type\Definition\Type;
use GraphQL;

class FavouritesType extends GraphQLType
{
    protected $attributes = [
        'name' => 'FavouritesType',
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
            'user' => [
                'type' => Type::string(),
                'description' => 'The id of the user'
            ],
            'device' => [
                'type' => GraphQL::type('devices'),
                'description' => 'Favourite devices of this user'
            ],
            'add' => [
                'type' => Type::boolean(),
            ],
            'delete' => [
                'type' => Type::boolean(),
            ],
            
        ];
    }

}
