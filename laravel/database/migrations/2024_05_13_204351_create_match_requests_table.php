<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('match_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_1')->constrained('users', 'id');
            $table->foreignId('user_2')->constrained('users', 'id');
            $table->foreignId('pet_id')->constrained('user_pets', 'id');
            $table->boolean('is_accepted')->nullable();
            $table->boolean('is_matched')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('match_requests');
    }
};
