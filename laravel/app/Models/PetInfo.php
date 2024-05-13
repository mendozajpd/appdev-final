<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetInfo extends Model
{
    use HasFactory;

    protected $fillable = ['pet_id', 'description', 'species', 'age', 'pic'];

    public function pet() {
        return $this->belongsTo(UserPet::class, 'pet_id');
    }
}
