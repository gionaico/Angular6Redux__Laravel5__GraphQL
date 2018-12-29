<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class prodVendidos extends Model
{
    protected $fillable = [
        'ventas_id','user_id', 'device_id'
    ];

    protected $table = 'prod_vendidos';
}
