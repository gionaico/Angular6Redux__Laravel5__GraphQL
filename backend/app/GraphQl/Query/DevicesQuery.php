<?php

namespace App\GraphQL\Query;

use App\Devices;
use App\Category;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class DevicesQuery extends Query
{
    protected $attributes = [
        'name' => 'Devices Query',
        'description' => 'A query of devices'
    ];

    public function type()
    {
        return GraphQL::paginate('devices');
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
        $device = Devices::with(array_keys($fields->getRelations()))
            ->where($where)
            ->select($fields->getSelect())
            ->paginate();

        return $device;
    }
}