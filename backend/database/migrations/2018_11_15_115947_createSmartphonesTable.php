<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSmartphonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*
'model' => "B".$faker->numberBetween(1, 50),
        'description' => $faker->sentence(10),
        'price' => 'secret',
        'battery' => $faker->numberBetween(1, 50),
        'brand' => 'BQ',
        'camera' => $faker->numberBetween(0,1)
        */
        /*Schema::create('smartphones', function (Blueprint $table) {
            $table->increments('id');
            $table->string('model');
            $table->string('description');
            $table->number('price');
            $table->string('battery');
            $table->string('brand');
            $table->number('camera');
            $table->timestamps();

            $table->unique(['id']);
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('smartphones');
    }
}
