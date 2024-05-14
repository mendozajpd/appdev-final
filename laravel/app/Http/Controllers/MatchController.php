<?php

namespace App\Http\Controllers;

use App\Models\Matched;
use App\Models\MatchRequest;
use Illuminate\Http\Request;

class MatchController extends Controller
{
    public function createMatch(Request $request) {
        $matchRequest = new MatchRequest();
        $matchRequest->user_1 = $request->user_1;
        $matchRequest->user_2 = $request->user_2;
        $matchRequest->pet_id = $request->pet_id;
        $matchRequest->is_accepted = false;
        $matchRequest->is_matched = false;
        $matchRequest->save();
        
        return redirect()->route('match.index');
    }
    
    public function acceptMatch(Request $request) {
        $matchRequest = MatchRequest::find($request->id);
        $matchRequest->is_accepted = true;
        $matchRequest->save();
        
        $matched = new Matched();
        $matched->match_id = $matchRequest->id;
        $matched->user_id = $matchRequest->user_1;
        $matched->pet_id = $matchRequest->pet_id;
        $matched->save();
        
        $matched = new Matched();
        $matched->match_id = $matchRequest->id;
        $matched->user_id = $matchRequest->user_2;
        $matched->pet_id = $matchRequest->pet_id;
        $matched->save();
        
        return redirect()->route('match.index');
    }
    
    public function rejectMatch(Request $request) {
        $matchRequest = MatchRequest::find($request->id);
        $matchRequest->is_accepted = false;
        $matchRequest->save();
        
        return redirect()->route('match.index');
    }

    public function destroyMatch(Request $request) {
        $matchRequest = MatchRequest::find($request->id);
        $matchRequest->delete();
        
        return redirect()->route('match.index');
    }

    public function destroyMatched(Request $request) {
        $matched = Matched::find($request->id);
        $matched->delete();
        
        return redirect()->route('match.index');
    }

    public function destroyAllMatched() {
        Matched::truncate();
        
        return redirect()->route('match.index');
    }

    public function destroyAllMatchRequest() {
        MatchRequest::truncate();
        
        return redirect()->route('match.index');
    }

    public function destroyAll() {
        Matched::truncate();
        MatchRequest::truncate();
        
        return redirect()->route('match.index');
    }
}
