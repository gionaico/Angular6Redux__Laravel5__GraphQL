<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProdVendidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prod_vendidos', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('ventas_id');
            $table->string('user_id');
            $table->string('device_id');
            $table->timestamps();

            $table->foreign('ventas_id')
                ->references('id')
                ->on('prod_ventas')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prod_vendidos');
    }
}
