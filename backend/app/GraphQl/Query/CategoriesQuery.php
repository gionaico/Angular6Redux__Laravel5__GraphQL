<?php

namespace App\GraphQL\Query;

use App\Category;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class CategoriesQuery extends Query
{
    protected $attributes = [
        'name' => 'Categories Query',
        'description' => 'A query of categories'
    ];

    public function type()
    {
        return GraphQL::paginate('categories');
    }

    public function args()
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int()
            ],
        ];
    }

    public function resolve($root, $args, SelectFields $fields)
    {
        $where = function ($query) use ($args) {
            if (isset($args['id'])) {
                $query->where('id',$args['id']);
            }

        };
        $category = Category::with(array_keys($fields->getRelations()))
            ->where($where)
            ->select($fields->getSelect())
            ->paginate();

        return $category;
    }
}
