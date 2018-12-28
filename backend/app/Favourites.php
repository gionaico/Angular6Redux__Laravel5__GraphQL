<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Devices;

class Favourites extends Model
{   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id','device_id'
    ];

    /* protected $with = [
            'devices'
        ]; */
    public function device()
    {
        return $this->belongsTo(Devices::class);
    }

    /* public function getDevicesListAttribute()
    {
        $devices = Devices::whereId($this->devices_id)->firstOrFail();
        return $devices;
    
    } */
    /* public function devices(){
        return $this->belongsToMany(Devices::class);
    
    } */
    /* public function group() {
		return $this->belongsTo(Devices::class);
	} */
}
