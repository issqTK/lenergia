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
        Schema::create('mail_adresses', function (Blueprint $table) {
            DB::statement('SET SESSION sql_require_primary_key=0');
            $table->id();
            $table->string('name')->nullable();
            $table->string('mailAdress');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mail_adresses');
    }
};
