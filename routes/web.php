<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', function () { return view('home'); });

Route::get('home', 'PageController@index')->name('home');
Route::get('profile', 'PageController@profile')->name('profile');
Route::get('users', 'UserController@index')->name('get-users');
Route::get('/users/{id}', 'UserController@show');

Route::post('users', 'UserController@store');



