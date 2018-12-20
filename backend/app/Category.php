<?php

namespace App;
use App\RealWorld\Slug\HasSlug;
use App\RealWorld\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{   
    use Filterable, HasSlug;
    //use Notifiable, Followable, HasFavorite;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'slug','name', 'description'
    ];

    public function category()
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
        return 'name';
    }

    /* public function smartphones()
     {
         return $this->belongsToMany(Devices::class);
     }*/
    
    
}
