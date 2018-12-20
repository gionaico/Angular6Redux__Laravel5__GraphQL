<?php

namespace App\Http\Controllers\Api;
use App\Devices;
use App\RealWorld\Transformers\DevicesTransformer;
use App\RealWorld\Filters\DeviceFilter;
use App\RealWorld\Paginate\Paginate;

class DeviceController extends ApiController
{
    /**
     * TagController constructor.
     *
     * @param TagTransformer $transformer
     */
    public function __construct(DevicesTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Get all the tags.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(DeviceFilter $filter)
    {
        //$devices = Devices::all();
        //$smartphones = Smartphones::all()->pluck('description');
        //print_r($tags);
        //print_r($this->respondWithTransformer($tags));
        //return $smartphones;
        //return $this->respondWithTransformer($devices);
        
        $articles = new Paginate(Devices::loadRelations()->filter($filter));
        //$articles = Devices::loadRelations()->filter($filter);
        return $this->respondWithPagination($articles);
///api/devices?categotry=AngularJS&?limit=5&offset=1

    }

    public function show($devices)
    {
        $devices = Devices::where('slug','=', $devices)->firstOrFail();
        //$devices = Devices::all()->pluck('model');
        //$devices = Devices::all();
        //print_r($article);
        //print_r($article['title']);
        //print_r($this->respondWithTransformer($article));
        return $this->respondWithTransformer($devices);
    }
}
