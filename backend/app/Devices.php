<?php

namespace App;
use App\RealWorld\Slug\HasSlug;
use App\RealWorld\Filters\Filterable;
/*use JWTAuth;
use App\RealWorld\Follow\Followable;
use App\RealWorld\Favorite\HasFavorite;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;*/
use Illuminate\Database\Eloquent\Model;
use App\Category;
class Devices extends Model
{   
    use Filterable, HasSlug;
    //use Notifiable, Followable, HasFavorite;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'slug','model', 'description', 'price', 'battery', 'brand', 
        'camera','category_id','media'
    ];

    
    protected $with = [
            'categories'
        ];
    public function getCategoryListAttribute()
    {
        $devices = Category::whereId($this->category_id)->firstOrFail();
        return $devices;
    
    }
    

     public function scopeLoadRelations($query)
    {
        //print_r($query->pluck('slug'));
        //print_r($query->where('category_id', "1"));
       /*$query->with(['devices.slug' => function ($query) {
            print_r($query->pluck('slug'));
            $query->where('id', auth()->id());
        }])->withCount('devices');
       return $query;*/
    
    }

    public function devices()
    {
        return $this->belongsTo(Category::class);
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
        return 'model';
    }
    
    /**
     * Get all the articles by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */

    public function categories()
    {
        //return $this->belongsToMany(Category::class)->latest();
        return $this->belongsTo(Category::class);
    }
    
}
