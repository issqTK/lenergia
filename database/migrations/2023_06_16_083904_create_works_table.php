<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('works', function (Blueprint $table) {
            #DB::statement('SET SESSION sql_require_primary_key=0');
            $table->id();
            $table->string('type');
            $table->string('name');
            $table->string('svg')->nullable();
            $table->string('img')->nullable();
            $table->string('img_alt')->nullable();
            $table->string('title');
            $table->text('description');
            $table->string('slug');
            $table->string('meta_title');
            //$table->text('meta_description');
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('works');
    }
};
