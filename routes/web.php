<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/user/create/new', 'create');
    Route::post('/user/store', 'store');
    Route::get('/user/show/{id}', 'show');
    Route::get('/user/edit/{id}', 'edit');
    Route::put('/users/update/{id}', 'update');
    Route::get('/user/delete/{id}', 'destroy');
});
