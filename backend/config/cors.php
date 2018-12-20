<?php
return [
    /*
     |--------------------------------------------------------------------------
     | Laravel CORS
     |--------------------------------------------------------------------------
     |
     | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
     | to accept any value.
     |
     
     'allowedOrigins' => env(["http://localhost:4200,http://localhost:4200/","http://127.0.0.1:4200","http://127.0.0.1:4200/"]) ? explode(',', env('["http://localhost:4200,http://localhost:4200/","http://127.0.0.1:4200","http://127.0.0.1:4200/"]')) : ['*'],
     'allowedHeaders' => ['Content-Type', 'X-Requested-With', 'Authorization'],
     */
    'supportsCredentials' => true,
    'allowedOrigins' => ['*'],
    'allowedHeaders' => ['Content-Type', 'X-Requested-With', 'Authorization'],
    'allowedMethods' => ['*'],
    'exposedHeaders' => [],
    'maxAge' => 864000,
];