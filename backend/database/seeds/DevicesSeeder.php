<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Category;

class DevicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    protected $totalDevices = 25;
    protected $totalCategories = 5;
    protected $userWithArticleRatio = 0.8;
    protected $maxArticlesByUser = 15;
    protected $totalTags = 20;
    public function run(\Faker\Generator $faker)
    {
        $category = factory(\App\Category::class)->times($this->totalCategories)->create();
        $devices = factory(\App\Devices::class)->times($this->totalDevices)->create();

        $devices->random($faker->numberBetween(1, (int) $devices->count() * 0.5))
        ->each(function ($devices) use ($faker, $category) {
            $devices->category()->attach(
                $category->random($faker->numberBetween(1, min($this->totalCategories, $this->totalDevices)))
            );
        });

        //$devices = factory(\App\Devices::class)->times($this->totalDevices)->create();
        //$category = factory(\App\Category::class)->times($this->totalCategories)->create();

        /*$devices->random($faker->numberBetween(1, (int) $devices->count() * 0.5))
        ->each(function ($devices) use ($faker, $category) {
            $devices->category()->attach(
                $category->random($faker->numberBetween(1, min($this->maxArticlesByUser, $this->totalTags)))
            );
        });*/

        /*$devices->random((int) $this->totalDevices * $this->userWithArticleRatio)
            ->each(function ($devices) use ($faker, $category) {
                $devices->category()
                    ->saveMany(
                        factory(\App\Category::class)
                        ->times($faker->numberBetween(1, $this->maxArticlesByUser))
                        ->make()
                    )
                    
            });*/
    }
}
