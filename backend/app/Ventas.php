<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ventas extends Model
{
    protected $fillable = [
        'pedido_num', 'id_username', 'fecha', 'importe_total'
    ];

    public function ventas()
    {
        return $this->belongsToMany();
    }
    /**
     * Get the key name for route model binding.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Get the attribute name to slugify.
     *
     * @return string
     */
    public function getSlugSourceColumn()
    {
        return 'pedido_num';
    }
}
