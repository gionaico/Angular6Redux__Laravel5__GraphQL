<?php

use App\GraphQL\Query\DevicesQuery;
use App\GraphQL\Query\UsersQuery;
use App\GraphQL\Type\DevicesType;
use App\GraphQL\Type\UsersType;
use App\GraphQL\Query\CategoriesQuery;
use App\GraphQL\Type\CategoriesType;

return [
    'prefix' => 'graphql',
    'routes' => 'query/{graphql_schema?}',
    'controllers' => \Rebing\GraphQL\GraphQLController::class . '@query',
    'middleware' => [],
    'default_schema' => 'default',
    // register query
    'schemas' => [
        'default' => [
            'query' => [
                'devices' => DevicesQuery::class,
                'categories' => CategoriesQuery::class,
                //'users' => UsersQuery::class,
            ],
            
            
        ],
    ],
    // register types
    'types' => [
        'devices'  => DevicesType::class,
        'categories'  => CategoriesType::class,
        //'users'  => UsersType::class,
        
    ],
    'error_formatter' => ['\Rebing\GraphQL\GraphQL', 'formatError'],
    'params_key'    => 'params'
];
