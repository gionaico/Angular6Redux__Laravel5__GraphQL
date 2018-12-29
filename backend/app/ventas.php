<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ventas extends Model
{
    protected $fillable = [
        'user_id','price'
    ];

    protected $table = 'prod_ventas';
}