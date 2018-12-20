<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\User;
use App\Http\Requests\Api\LoginUser;
use App\Http\Requests\Api\RegisterUser;
use App\RealWorld\Transformers\UserTransformer;

class AuthController extends ApiController
{
    /**
     * AuthController constructor.
     *
     * @param UserTransformer $transformer
     */
    public function __construct(UserTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Login user and return the user if successful.
     *
     * @param LoginUser $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginUser $request)
    //public function login(Request $request)
    {
        
        $credentials = $request->only('user.email', 'user.password');
        $credentials = $credentials['user'];

        if (! Auth::once($credentials)) {
            return $this->respondFailedLogin();
        }
        
        //return response()->json($request->get('user'), 200, []);
        //return response()->json($request->input('user.email'), 200, []);
        //return response()->json(auth()->user(), 200, []);

        return $this->respondWithTransformer(auth()->user());
    }

    /**
     * Register a new user and return the user if successful.
     *
     * @param RegisterUser $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterUser $request)
    //public function register(Request $request)
    {
        $user = User::create([
            'username' => $request->input('user.username'),
            'email' => $request->input('user.email'),
            'password' => $request->input('user.password'),
            'image' => $request->input('user.image'),
        ]);
        
        //return response()->json($request->get('user'), 200, []);
        //return response()->json($request->input('user.username'), 200, []);
        //return response()->json($user, 200, []);
        
        return $this->respondWithTransformer($user);
    }
}
