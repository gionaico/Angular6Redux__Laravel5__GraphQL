<?php

namespace App\RealWorld\Filters;

use App\Devices;

class DeviceFilter extends Filter
{
    
    /**
     * Filter by tag name.
     * Get all the articles tagged by the given tag name.
     *
     * @param $name
     * @return \Illuminate\Database\Eloquent\Builder
     */

    protected function category($name)
    {
        $device = Devices::whereCategoryId($name)->first();
        return $this->builder->whereIn('category_id', $device);
        
    }
}