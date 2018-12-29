<?php

namespace App\GraphQL\Mutation;


use App\Favourites;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\SelectFields;

class FavouritesMutation extends Mutation
{
    protected $attributes = [
        'name' => 'FavouritesMutation',
        'description' => 'A Mutation of Favourites'
    ];

    public function type()
    {
        /* return Type::listOf(GraphQL::type('favourites')); */
        return GraphQL::type('favourites');
    }

    public function args()
    {
        return [
            'user' => [
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required']
            ],
            'device_id' => [
                'type' => Type::nonNull(Type::int()),
                'rules' => ['required']
            ]
        ];
    }

    public function resolve($root, $args, SelectFields $fields, ResolveInfo $info){
        $favourite = Favourites::where('user', "=", $args['user'])
        ->where('device_id', "=", $args['device_id'])->first();
        
        if (count($favourite)==1) {
            $favourite->delete();
            $favourite->add=false;
            $favourite->delete=true;
            return $favourite;
        }
        
        $newFavourite = new Favourites();
        $newFavourite->user=$args['user'];
        $newFavourite->device_id=$args['device_id'];
        $newFavourite->save();
        $newFavourite->add=true;
        $newFavourite->delete=false;
        return $newFavourite;

    }
}
