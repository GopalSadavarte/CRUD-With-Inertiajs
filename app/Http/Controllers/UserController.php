<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return Inertia::render('Home', props: ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('StoreUser');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // User::create($request->validate(['name' => 'required|alpha', 'age' => 'numeric|required', 'email' => 'required|email', 'phone' => 'required|size:10|numeric', 'address' => 'required|string'], $request->all()));
        $request->validate(['name' => 'required|alpha', 'age' => 'numeric|required', 'email' => 'required|email', 'phone' => 'required|size:10', 'address' => 'required|string']);
        User::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        return Inertia::render('UpdateUser', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(['name' => 'required|alpha', 'age' => 'numeric|required', 'email' => 'required|email', 'phone' => 'required|size:10', 'address' => 'required|string'], [
            'phone.size' => "phone no must have 10 digits!",
        ]);
        //broadcast(new SendMessage("hello"))->toOthers();
        User::whereId($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::destroy($id);
    }
}
