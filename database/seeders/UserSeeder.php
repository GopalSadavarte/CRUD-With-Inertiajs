<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    use WithoutModelEvents;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = collect([
            [
                'name' => "Rakesh",
                'age' => 24,
                'phone' => '6536526490',
                'address' => "Shrirampur",
                'email' => "rakesh1@gmail.com",
            ],
            [
                'name' => "Rakesh",
                'age' => 24,
                'phone' => '6536526490',
                'address' => "Shrirampur",
                'email' => "rakesh2@gmail.com",
            ], [
                'name' => "Rakesh",
                'age' => 24,
                'phone' => '6536526490',
                'address' => "Shrirampur",
                'email' => "rakesh3@gmail.com",
            ], [
                'name' => "Rakesh",
                'age' => 24,
                'phone' => '6536526490',
                'address' => "Shrirampur",
                'email' => "rakesh4@gmail.com",
            ], [
                'name' => "Rakesh",
                'age' => 24,
                'phone' => '6536526490',
                'address' => "Shrirampur",
                'email' => "rakesh5@gmail.com",
            ],
        ]);

        $users->each(function ($user) {
            User::create($user);
        });
    }
}
