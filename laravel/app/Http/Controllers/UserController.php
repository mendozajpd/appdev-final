<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $userInfo = new UserInfo();
        $userInfo->user_id = $user->id;
        $userInfo->birthday = $request->birthday;
        $userInfo->description = $request->description;
        if ($request->hasFile('uploadedFile')) {
            $currentTime = time();
            $hashedTime = hash('sha256', $currentTime);
            $extension = $request->file('uploadedFile')->getClientOriginalExtension();
            $request->file('uploadedFile')->storeAs('profile_pics', $hashedTime . '.' . $extension, 'public');
            $profilePicName = $hashedTime . '.' . $extension;
            $userInfo->pic = $profilePicName;
        }
        $userInfo->save();
        
        return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function showProfile($id) {
        $user = User::find($id);
        $userInfo = UserInfo::where('user_id', $id)->first();
        
        return view('profile', ['user' => $user, 'userInfo' => $userInfo]);
    }
    
    public function editProfile($id) {
        $user = User::find($id);
        $userInfo = UserInfo::where('user_id', $id)->first();
        
        return view('edit-profile', ['user' => $user, 'userInfo' => $userInfo]);
    }
    
    public function updateProfile(Request $request) {
        $user = User::find($request->id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
        
        $userInfo = UserInfo::where('user_id', $request->id)->first();
        $userInfo->birthday = $request->birthday;
        $userInfo->description = $request->description;
        $userInfo->save();
        
        return redirect()->route('profile.show', ['id' => $request->id]);
    }
    
    public function destroyProfile(Request $request) {
        $user = User::find($request->id);
        $user->delete();
        
        $userInfo = UserInfo::where('user_id', $request->id)->first();
        $userInfo->delete();
        
        return redirect()->route('home');
    }
}
