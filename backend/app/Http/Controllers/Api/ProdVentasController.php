<?php

namespace App\Http\Controllers\Api;
use App\ventas;
use App\prodVendidos;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SendVentas;

class ProdVentasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SendVentas $request)
    {
        $ventas = ventas::insert([
            'user_id' => $request->input('pedido.id'),
            'price' => $request->input('pedido.price')
        ]);

        $ventas_all = ventas::all();
        $device = $request->input('pedido.device');

        foreach ($device as $p) {
            $vendidos = prodVendidos::insert([
                'ventas_id' => $ventas_all->last()->id,
                'user_id' => $request->input('pedido.id'),
                'device_id' => $p['id']
            ]);
        }
        
        if($ventas==1 && $vendidos==1) return 1;
        else return 2;
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        
    }
}
