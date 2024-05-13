<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matched extends Model
{
    use HasFactory;

    protected $fillable = ['match_id', 'user_id', 'pet_id'];

    public function matchRequest() {
        return $this->belongsTo(MatchRequest::class, 'match_id');
    }
    
    public function user() {
        return $this->belongsTo(User::class);
    }
    
    public function pet() {
        return $this->belongsTo(UserPet::class, 'pet_id');
    }
}
