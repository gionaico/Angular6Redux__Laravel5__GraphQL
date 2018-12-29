<?php

namespace App\GraphQL\Query;

use App\Favourites;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

use Rebing\GraphQL\Support\SelectFields;

class FavouritesQuery extends Query
{
    protected $attributes = [
        'name' => 'Favourites Query',
        'description' => 'A query of Favourites'
    ];

    public function type()
    {
        /* return Type::listOf(GraphQL::type('favourites')); */
        return GraphQL::paginate('favourites');
    }

    public function args()
    {
        return [
            'id' => [
                'name' => 'user',
                'type' => Type::string()
            ],
        ];
    }

    public function resolve($root, $args, SelectFields $fields){
        
        $where = function ($query) use ($args) {
            if (isset($args['user'])) {
                $query->where('user',$args['user']);
            }
        };

        $res = Favourites::with(array_keys($fields->getRelations()))
            ->where($where)
            ->select($fields->getSelect())
            ->paginate();

        return $res;

        /* $select = $fields->getSelect();
        $with = $fields->getRelations();
        
        if (isset($args['id'])) {
            return Favourites::where('user_id','=',$args['id'])->get();
        }

        $res = Favourites::with($with)
            ->select($select)->get();

        return $res; */
    }
}
