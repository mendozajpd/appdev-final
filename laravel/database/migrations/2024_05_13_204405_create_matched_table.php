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
        Schema::create('matched', function (Blueprint $table) {
            $table->id();
            $table->foreignId('match_id')->constrained('match_requests', 'id');
            $table->foreignId('user_id')->constrained();
            $table->foreignId('pet_id')->constrained('user_pets', 'id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matched');
    }
};
